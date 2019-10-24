FROM python:3.7-slim
MAINTAINER Nir Galon <nir@galon.io>
ENV SANIC_REQUEST_TIMEOUT 500
ENV SANIC_RESPONSE_TIMEOUT 500

RUN apt-get update && apt-get install -y --allow-unauthenticated

ADD . /code
RUN pip install -r /code/requirements.txt
WORKDIR /code

EXPOSE 8000
CMD ["python", "-m", "sanic", "main.app", "--host=0.0.0.0", "--port=8000", "--workers=1"]
