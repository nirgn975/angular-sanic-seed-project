FROM node:latest
MAINTAINER Nir Galon <nir@galon.io>

#RUN apt-get update -y


#Disable npm progress bar - for speed.
#RUN npm set progress=false

# Install Angular CLI tool.
# RUN npm install -g angular-cli typings --silent

# Install npm dependencies.
#RUN npm install --silent


RUN useradd --user-group --create-home --shell /bin/false app

ENV APP_NAME "client"
ENV APP_USER "app"
ENV HOME /home/$APP_USER
ENV APP_DIR $HOME/$APP_NAME

RUN npm install --global --silent angular-cli

WORKDIR $APP_DIR
COPY package.json $APP_DIR/package.json
RUN npm install --silent && npm cache clean
COPY . $APP_DIR
RUN chown -R $APP_USER:$APP_USER $HOME/*

USER $APP_USER
WORKDIR $APP_DIR

EXPOSE 4200

CMD ["npm", "start"]
