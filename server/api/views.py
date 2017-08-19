import logging
import logstash

from rest_framework import viewsets
from django.conf import settings
from django.views.decorators.cache import cache_page
from django.core.cache.backends.base import DEFAULT_TIMEOUT

from django.contrib.auth.models import User
from api.serializers import UserSerializer

logstash_logger = logging.getLogger('python-logstash-logger')
logstash_logger.setLevel(logging.INFO)
logstash_logger.addHandler(logstash.TCPLogstashHandler('logstash', 5959, version=1))

CACHE_TTL = getattr(settings, 'CACHE_TTL', DEFAULT_TIMEOUT)


@cache_page(CACHE_TTL)
class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    logstash_logger.info('logstash-server: test logstash info message.')
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
