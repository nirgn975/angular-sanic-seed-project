FROM python:3-onbuild
MAINTAINER Nir Galon <nir@galon.io>

RUN useradd --user-group --create-home --shell /bin/false app

ENV APP_NAME "server"
ENV APP_USER "app"
ENV HOME /home/$APP_USER
ENV APP_DIR $HOME/$APP_NAME

WORKDIR $APP_DIR
COPY requirements.txt $APP_DIR/requirements.txt

COPY . $APP_DIR
RUN chown -R $APP_USER:$APP_USER $HOME/*

USER $APP_USER
WORKDIR $APP_DIR

RUN chmod +x /home/app/server/entrypoint.sh
EXPOSE 8000
