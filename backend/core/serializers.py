from rest_framework.serializers import ModelSerializer
from . models import *

class TasksSerializer(ModelSerializer):
    class Meta:
        model = Tasks
        fields = "__all__"