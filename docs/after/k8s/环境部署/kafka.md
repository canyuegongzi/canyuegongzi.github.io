## kafka

### deployment.yml

```
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: kafka
  name: kafka
spec:
  replicas: 1
  selector:
    matchLabels:
      app: kafka
  template:
    metadata:
      labels:
        app: kafka
    spec:
      containers:
        - env:
            - name: KAFKA_ADVERTISED_HOST_NAME
              value: "**.**.150.131"
            - name: KAFKA_ADVERTISED_PORT
              value: "19092"
            - name: KAFKA_BROKER_ID
              value: "1"
            - name: KAFKA_ZOOKEEPER_CONNECT
              value: 172.27.0.17:30181
            - name: KAFKA_CREATE_TOPICS
              value: "test-topic:1:1"
          image: wurstmeister/kafka
          imagePullPolicy: IfNotPresent
          name: kafka
          ports:
            - containerPort: 9092
```

### service.yml

```
apiVersion: v1
kind: Service
metadata:
  labels:
    app: zookeeper-service
  name: zookeeper-service
spec:
  type: LoadBalancer
  ports:
    - name: zookeeper-port
      port: 30181
      protocol: TCP
      targetPort: 2181
  selector:
    app: zookeeper
```
