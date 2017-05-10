from rest_framework import viewsets
from django.contrib.auth.models import User
from api.serializers import UserSerializer

logstash_logger = logging.getLogger('python-logstash-logger')
logstash_logger.setLevel(logging.INFO)
logstash_logger.addHandler(logstash.TCPLogstashHandler('localhost', 5959, version=1))


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    logstash_logger.info('logstash: test logstash info message.')
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
