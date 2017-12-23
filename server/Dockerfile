FROM python:3.6.3-alpine
MAINTAINER Nir Galon <nir@galon.io>

ENV APP_DIR /home/app

ADD . $APP_DIR
WORKDIR $APP_DIR
EXPOSE 8000

RUN echo "http://dl-3.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories
RUN apk add --no-cache gcc libc-dev unixodbc-dev make

### --------------------
# When pip will be ready:
# RUN pip install -p

# In the meanwhile:
# RUN pipenv lock -r > requirements.txt
RUN pip install -r requirements.txt
### --------------------

RUN chmod +x /home/app/entrypoint.sh
