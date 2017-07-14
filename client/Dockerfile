FROM node:8.1.2
MAINTAINER Nir Galon <nir@galon.io>

# Install nginx
RUN apt-get update && apt-get install -y --no-install-recommends \
  nginx-light

# nginx files
COPY ./nginx /etc/nginx

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app
RUN npm run build -- --prod
RUN npm run sw

EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
