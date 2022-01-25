FROM golang:1.14-alpine AS build

ENV APP_USER app
ENV APP_HOME /go/src/mathapp
ARG GROUP_ID
ARG USER_ID
RUN groupadd --gid $GROUP_ID app && useradd -m -l --uid $USER_ID --gid $GROUP_ID $APP_USER
RUN mkdir -p $APP_HOME && chown -R $APP_USER:$APP_USER $APP_HOME
USER $APP_USER
WORKDIR $APP_HOME

ADD . $APP_HOME
RUN GO111MODULE=on CGO_ENABLED=0 go run github.com/mitchellh/gox -ldflags -parallel=2 -output="_bin/{{.OS}}-{{.Arch}}/derrick" -osarch='darwin/amd64 linux/amd64 windows/amd64' ./

FROM scratch
COPY --from=build _/bin/ /bin/
