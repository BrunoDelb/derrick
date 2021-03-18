# Derrick

[![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)
[![GitHub release](https://img.shields.io/badge/release-0.1.2-green.svg)](https://github.com/alibaba/derrick/releases)
[![Build Status](https://travis-ci.org/alibaba/derrick.svg?branch=master)](https://travis-ci.org/alibaba/derrick)
[![Codecov](https://codecov.io/gh/alibaba/derrick/branch/master/graph/badge.svg)](https://codecov.io/gh/alibaba/derrick)
[![Go Reference](https://pkg.go.dev/badge/github.com/alibaba/derrick.svg)](https://pkg.go.dev/github.com/alibaba/derrick)

Derrick is a tool to help you containerize application in seconds.
Derrick focuses on developer workflow in local development environment.
Derrick will inspect your workspace and generate Dockerfile and other manifests to achieve containerization.
You can use Derrick to set up your DevOps processes in container-native way.

<img src="http://container-service.oss-cn-beijing.aliyuncs.com/derrick.png" width=100%/>    

Using Derrick is very simple:    
1. `derrick gen` to automatically inspect the workspace and generate the Dockerfile for your application, or
2. `derrick list` to show all available riggings and pick one via `derrick gen -r <rigging>` to generate the Dockerfile.
3. Use your favorite text editor to modify the Dockerfile or other manifests before building and shipping the containers.
4. Integrate into your workflow and have fun.

## Architecture

Derrick has basically the following processing layers:

- **Rigging**: It bundles language specific logic into a package and hooks into derrick's lifecycle to detect the codebase and generate the Dockerfile.
- **AutoParam**: This is called and reused by Riggings to detect dev environment and fill template with detected parameters like Go version, package name, etc.

## Language Support

Here is the list of frameworks passed the tests. If you want to support more languages and frameworks, please submit an issue.

* Java
* PHP
* PYTHON
* Golang
* NodeJs
  
## Quick Start

### Installation

Build `derrick` binary: 

```shell
make build
cp _bin/derrick /usr/local/bin/
```

Verify it in command line:

```shell
$ derrick -h
🐳 A tool to help you containerize applications in seconds

Usage:
  derrick [command]

Available Commands:
  gen         Inspect the application and generate Dockerfile
  help        Help about any command
  list        List all available riggings to inspect the applications
  version     Prints out build version information

Flags:
  -h, --help   help for derrick

Use "derrick [command] --help" for more information about a command.
```

### Show available riggings

```shell
$ derrick list

Available riggings:
	golang
	java
	nodejs
	php
	python
```

### Build golang application

- Clone a sample project

Clone this sample project into your Golang path.

```shell
$ git clone git@github.com:zzxwill/golang-web-application.git
$ cd golang-web-application
```

- Compile the application

```shell
$ derrick gen
Successfully detected your platform is 'golang'
Successfully generated: Dockerfile
Successfully generated: derrick.conf
```

- (Optional) You can also manually specify to use golang rigging:

```shell
$ derrick gen -r golang
```

### Build Java application

Clone a Java application, and build it.

```shell
$ git clone https://github.com/hongchaodeng/simple-java-maven-app.git
$ cd simple-java-maven-app
$ derrick gen
Successfully detected your platform is 'java'
Successfully generated: Deployment.yaml
Successfully generated: Dockerfile
Successfully generated: chart/Chart.yaml
Successfully generated: chart/.helmignore
Successfully generated: chart/templates/NOTES.txt
Successfully generated: chart/templates/deployment.yaml
Successfully generated: chart/templates/_helpers.tpl
Successfully generated: chart/templates/hpa.yaml
Successfully generated: chart/templates/ingress.yaml
Successfully generated: chart/templates/service.yaml
Successfully generated: chart/templates/serviceaccount.yaml
Successfully generated: chart/templates/tests/test-connection.yaml
Successfully generated: chart/values.yaml
Successfully generated: derrick.json
```

Check the Dockerfile:

```shell
$ cat Dockerfile
# First stage: build environment
FROM maven:3.5.0-jdk-8-alpine AS builder

# To resolve dependencies first without re-download everytime
ADD ./pom.xml pom.xml
# By default mvn use '~/.m2' which could be cleaned up, change to use './.m2'
RUN mvn install -Dmaven.repo.local=./.m2

ADD ./src src/
# package jar
RUN mvn install -Dmaven.test.skip=true -Dmaven.repo.local=./.m2

# Second stage: runtime environment
From openjdk:8

# copy jar from the first stage
COPY --from=builder target/my-app-1.0-SNAPSHOT.jar my-app-1.0-SNAPSHOT.jar

# MY_CPU_LIMIT could be imported via downward API automatically in Kubernetes Deployment.
CMD ["java", \
  "-XX:InitialRAMPercentage=75", \
  "-XX:MaxRAMPercentage=75", \
  "-XX:MinRAMPercentage=25", \
  "-XX:ActiveProcessorCount=$MY_CPU_LIMIT", \
  "-jar", "my-app-1.0-SNAPSHOT.jar"]
```

We can see the Dockerfile that:

- It separates build and runtime stages.
  It uses `openjdk` which is the popular and standard base for runtime environment.
- It has optimized caching of dependencies.
- It automatically parses artifact name from `pom.xml` .

It also generates a Helm Chart. Check this [sample output](https://github.com/hongchaodeng/simple-java-maven-app/tree/master/chart).

We can see the deployment manifests by running the following comand:

```shell
$ cd chart/
$ helm template test .
...
apiVersion: apps/v1
kind: Deployment
metadata:
  name: test-simple-java-maven-app
  labels:
    helm.sh/chart: simple-java-maven-app-0.1.0
    app.kubernetes.io/name: simple-java-maven-app
    app.kubernetes.io/instance: test
    app.kubernetes.io/version: "1.16.0"
    app.kubernetes.io/managed-by: Helm
spec:
  replicas: 1
  selector:
    matchLabels:
      app.kubernetes.io/name: simple-java-maven-app
      app.kubernetes.io/instance: test
  template:
    metadata:
      labels:
        app.kubernetes.io/name: simple-java-maven-app
        app.kubernetes.io/instance: test
    spec:
      serviceAccountName: test-simple-java-maven-app
      containers:
        - name: simple-java-maven-app
          image: "nginx:1.16.0"
          imagePullPolicy: IfNotPresent
          env:
            - name: MY_CPU_REQUEST
              valueFrom:
                resourceFieldRef:
                  containerName: java-app
                  resource: requests.cpu
            ...
          ports:
            - name: http
              containerPort: 80
              protocol: TCP
          livenessProbe:
            tcpSocket:
              port: 80
            ...
          readinessProbe:
            ...
          resources:
            limits:
              cpu: 2
              memory: 1500M
            requests:
              cpu: 1
              memory: 1500M
```


### Build NodeJS application

```shell
$ git clone git@github.com:zzxwill/nodejs-web-application.git
$ cd nodejs-web-application
$ derrick gen
```

## *License*

This software is released under the Apache 2.0 license.
