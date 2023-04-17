from django.db import models

# Create your models here.
class Project(models.Model):
    homepage = models.BooleanField(default=False)
    category = models.CharField(max_length=100, choices=[('music', 'Music'), ('commercial', 'Commercial')])
    client_name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    project_type = models.CharField(max_length=100)
    description = models.TextField()
    
class Project_Asset(models.Model):
    project = models.ForeignKey(Project, related_name='assets', on_delete=models.CASCADE)
    content_url = models.CharField(max_length=255)
    content_description = models.TextField()