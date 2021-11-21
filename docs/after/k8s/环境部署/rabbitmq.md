## rabbitmq

### image

直接部署时间较长，建议先拉去image。

```
docker pull rabbitmq
```

### configmap.yml

执行命令

```
kubectl create cm rabbit-plugins --from-literal=enabled_plugins="[rabbitmq_shovel,rabbitmq_shovel_management]."

```

### deployment.yml

```
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: rabbitmq
  name: rabbitmq
spec:
  replicas: 1
  selector:
    matchLabels:
      app: rabbitmq
  template:
    metadata:
      labels:
        app: rabbitmq
    spec:
      containers:
        - env:
            - name: RABBITMQ_DEFAULT_USER
              value: "root"
            - name: RABBITMQ_DEFAULT_PASS
              value: "123ADD123ADD"
            - name: TZ
              value: Asia/Shanghai
          image: rabbitmq:latest
          imagePullPolicy: IfNotPresent
          name: rabbitmq
          ports:
            - containerPort: 15672
              name: manager
            - containerPort: 5672
              name: broker
          volumeMounts:
            - mountPath: /etc/rabbitmq/enabled_plugins
              name: configfile
              subPath: enabled_plugins
      volumes:
        - name: configfile
          configMap:
            name: rabbit-plugins
            items:
              - key: enabled_plugins
                path: enabled_plugins
```

### service.yml

```
apiVersion: v1
kind: Service
metadata:
  labels:
    app: rabbitmq
  name: rabbitmq
spec:
  type: LoadBalancer
  ports:
    - name: broker
      port: 5179    # 5672转发到 5179  客户端链接
      protocol: TCP
      targetPort: 5672
    - name: manangement
      port: 15672
      protocol: TCP
      targetPort: 15672   # web端
  selector:
    app: rabbitmq
```
