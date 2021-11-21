## mysql

### deployment.yml

```
apiVersion: v1
kind: ReplicationController
metadata:
  name: mysql-rc
  labels:
    name: mysql-rc
spec:
  replicas: 1
  selector:
    name: mysql-pod
  template:
    metadata:
      labels:
        name: mysql-pod
    spec:
      containers:
        - name: mysql
          image: mysql:8.0.24
          imagePullPolicy: IfNotPresent
          ports:
            - containerPort: 3306
          env:
            - name: MYSQL_ROOT_PASSWORD
              value: "123Ad123Ad"
```
### service.yml

```
apiVersion: v1
kind: Service
metadata:
  name: mysql-svc
  labels:
    name: mysql-svc
spec:
  type: LoadBalancer
  ports:
    - port: 7000
      protocol: TCP
      targetPort: 3306
  selector:
    name: mysql-pod
```
