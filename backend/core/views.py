from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import status
from .models import *
from .serializers import *
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def get_all_tasks(request):
    tasks = Tasks.objects.all()
    serializer = TasksSerializer(tasks, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_task(request):
    serializer = TasksSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
def get_task_by_id(request, task_id):
    try:
        task = Tasks.objects.get(id=task_id)
    except Tasks.DoesNotExist:
        return Response({"error": "Task does not exist"}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = TasksSerializer(task)
    return Response(serializer.data)

@api_view(['DELETE'])
def delete_task(request, task_id):
    try:
        task = Tasks.objects.get(id=task_id)
    except Tasks.DoesNotExist:
        return Response({"error": "Task does not exist"}, status=status.HTTP_404_NOT_FOUND)
    
    task.delete()
    return Response({"message": "Task deleted successfully"}, status=status.HTTP_204_NO_CONTENT)

@api_view(['PUT'])
def update_task(request, task_id):
    try:
        task = Tasks.objects.get(id=task_id)
    except Tasks.DoesNotExist:
        return Response({"error": "Task does not exist"}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = TasksSerializer(task, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def alt_task_check(request, task_id):
    try:
        task = Tasks.objects.get(id=task_id)
    except Tasks.DoesNotExist:
        return Response({"error": "Task does not exist"}, status=status.HTTP_404_NOT_FOUND)
    
    task.checked = not task.checked  # Accessing the property to check task status
    task.save()
    return Response({"task_id": task_id, "is_completed": task.checked})