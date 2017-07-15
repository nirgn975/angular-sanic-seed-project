#!/bin/bash

echo "[run] go to project folder"
cd /home/app/server

echo "[run] Migrate DB"
python manage.py migrate

echo "[run] Collect static files"
python manage.py collectstatic --noinput

echo "[run] create superuser"
echo "from django.contrib.auth.models import User
if not User.objects.filter(username='admin').count():
    User.objects.create_superuser('admin', 'admin@example.com', 'pass')
" | python manage.py shell
#
# echo "[run] runserver"
# /usr/local/bin/gunicorn WhatsBuzz.wsgi:application -w 2 -b :8000 --reload
