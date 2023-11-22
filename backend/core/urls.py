from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_all_tasks),
    path('add/', views.create_task),
    path('task/<str:task_id>/', views.get_task_by_id),
    path('task/<str:task_id>/delete/', views.delete_task),
    path('task/<str:task_id>/update/', views.update_task),
    path('task/<str:task_id>/check/', views.alt_task_check)
]