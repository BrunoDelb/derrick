FROM golang:1.14-alpine AS build

ENV APP_HOME /src
WORKDIR $APP_HOME
ADD . $APP_HOME
RUN GO111MODULE=on CGO_ENABLED=0 go run github.com/mitchellh/gox -ldflags -parallel=2 -output="_bin/{{.OS}}-{{.Arch}}/derrick" -osarch='darwin/amd64 linux/amd64 windows/amd64' ./

FROM scratch
COPY --from=build _/bin/ /bin/
