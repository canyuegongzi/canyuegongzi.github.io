## redis

### configmap.yml

```
kind: ConfigMap
apiVersion: v1
metadata:
  name: redis-config
  namespace: default
  labels:
    app: redis
data:
  redis.conf: |-
    dir /data
    port 6379
    bind 0.0.0.0
    appendonly yes
    protected-mode no
    requirepass 123Asd123Asd
    pidfile /data/redis-6379.pid
```

### deployment.yml

```
apiVersion: v1
kind: ReplicationController
metadata:
  name: redis-rc
  labels:
    name: redis-rc
spec:
  replicas: 1
  selector:
    name: redis-pod
  template:
    metadata:
      labels:
        name: redis-pod
    spec:
      containers:
      - name: redis
        image: redis:6.2.2
        imagePullPolicy: IfNotPresent
        command:
          - "sh"
          - "-c"
          - "redis-server /usr/local/etc/redis/redis.conf"
        ports:
          - containerPort: 6379
        volumeMounts:
          - name: redis-volume
            mountPath: /data
          - name: config
            mountPath: /usr/local/etc/redis/redis.conf
            subPath: redis.conf
      volumes:
        - name: redis-volume
          hostPath:
            path: /data/rs-redis-volume          # 映射的宿主机目录
            type: DirectoryOrCreate
        - name: config
          configMap:
            name: redis-config
```

### service.yml

```
apiVersion: v1
kind: Service
metadata:
  name: redis-svc
  labels:
    name: redis-svc
spec:
  type: LoadBalancer
  ports:
    - port: 6380
      protocol: TCP
      targetPort: 6379
  selector:
    name: redis-pod
```
