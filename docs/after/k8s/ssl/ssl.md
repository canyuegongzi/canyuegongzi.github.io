## ssl

k3/8s 部署部署证书；

说到免费的SSL证书，大家首先想到的肯定是Let’s Encrypt，而使用过Let’s Encrypt的同学应该也知道，其有效期只有三个月，三个月后要重新续期。github上也有类似的脚本可以做到自动续期。那如果是在k8s上使用该免费证书，又如何操作的呢？这里cert-manager就派上用场了。

### 安装cert-manager

```
kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v1.6.1/cert-manager.crds.yaml
```

```
helm repo add jetstack https://charts.jetstack.io
```

```
helm repo update
```

```
kubectl create namespace cert-manager
```

```
helm install  cert-manager jetstack/cert-manager --namespace cert-manager --version v1.6.1
```


```
kubectl get pods -n cert-manager -w
```


### 创建、部署 cluster-issuer.yaml

#### yaml 文件

```
## cluster-issuer.yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: 1970305447@qq.com
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
      - http01:
          ingress:
            class: traefik

```

#### 部署 cluster-issuer

```
kubectl apply - f cluster-issuer.yaml
```

### b-cert.yaml

#### 创建、部署 b-cert.yaml

#### yaml 文件

```
## b-cert.yaml
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: canyuegongzi.xyz-tls
spec:
  secretName: canyuegongzi.xyz-tls
  issuerRef:
    name: letsencrypt-prod
    kind: ClusterIssuer
  dnsNames:
    - blog.canyuegongzi.xyz
    - www.canyuegongzi.xyz

```

#### 部署 b-cert.yaml

```
kubectl apply - f b-cert.yaml
```


### ingress 启用 ssl

```
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: nginx-ingress
  namespace: default
  annotations:
    kubernetes.io/ingress.class: traefik
spec:
  tls:
    - hosts:
        - blog.canyuegongzi.xyz               # TLS 域名
        #- www.canyuegongzi.xyz               # TLS 域名
      secretName: canyuegongzi.xyz-tls   # 用于存储证书的 Secret 对象名字
  rules:
    - host: blog.canyuegongzi.xyz
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
               serviceName: simple-blog-center-clinet-service
               servicePort: 3002
```
