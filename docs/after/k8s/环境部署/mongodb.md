## mongodb

### deployment.yml

```
apiVersion: v1
kind: ReplicationController
metadata:
  name: mongodb-rc
  labels:
    name: mongodb-rc
spec:
  replicas: 1
  selector:
    name: mongodb-pod
  template:
    metadata:
      labels:
        name: mongodb-pod
    spec:
      containers:
      - name: mongo
        image: mongo:4.2.9
        imagePullPolicy: IfNotPresent
        ports:
          - containerPort: 27017
        env:
          - name: MONGO_INITDB_ROOT_USERNAME  # 设置用户名
            value: root
          - name: MONGO_INITDB_ROOT_PASSWORD  # 设置密码
            value: '123Asd123Asd'
        volumeMounts:
          - mountPath: /data/db
            name: mongodb-volume
      volumes:
        - name: mongodb-volume
          hostPath:
            path: /data/rs-mongodb-volume          # 映射的宿主机目录
            type: DirectoryOrCreate
```

### service.yml

```
apiVersion: v1
kind: Service
metadata:
  name: mongodb-svc
  labels:
    name: mongodb-svc
spec:
  type: LoadBalancer
  ports:
    - port: 27019
      protocol: TCP
      targetPort: 27017
  selector:
    name: mongodb-pod
```
