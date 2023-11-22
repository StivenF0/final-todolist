from django.db import models
from uuid import uuid4 as uuid

# Create your models here.
class Tasks(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid)
    title = models.CharField(max_length=255)
    description = models.TextField(default="")
    checked = models.BooleanField(default=False)
