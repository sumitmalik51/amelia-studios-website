from django.db import models

# Create your models here.
class Project(models.Model):
    homepage = models.BooleanField(default=False)
    category = models.CharField(max_length=100, choices=[('music', 'Music'), ('commercial', 'Commercial')])
    client_name = models.CharField(max_length=100)
    project_title = models.CharField(max_length=100)
    project_type = models.CharField(max_length=100)
    description = models.TextField()

    # Class for how the Project Object will look on DB: 
    def __str__(self):
        return f"{self.client_name} - {self.project_title}"
    
class Project_Asset(models.Model):
    project = models.ForeignKey(Project, related_name='assets', on_delete=models.CASCADE)
    content_url = models.CharField(max_length=255)
    content_description = models.TextField()
    content_1_url = models.CharField(max_length=255, blank=True)
    content_1_description = models.TextField(blank=True)
    content_2_url = models.CharField(max_length=255, blank=True)
    content_2_description = models.TextField(blank=True)
    content_3_url = models.CharField(max_length=255, blank=True)
    content_3_description = models.TextField(blank=True)
    content_4_url = models.CharField(max_length=255, blank=True)
    content_4_description = models.TextField(blank=True)
    content_5_url = models.CharField(max_length=255, blank=True)
    content_5_description = models.TextField(blank=True)
    content_6_url = models.CharField(max_length=255, blank=True)
    content_6_description = models.TextField(blank=True)
    content_7_url = models.CharField(max_length=255, blank=True)
    content_7_description = models.TextField(blank=True)
    content_8_url = models.CharField(max_length=255, blank=True)
    content_8_description = models.TextField(blank=True)
    content_9_url = models.CharField(max_length=255, blank=True)
    content_9_description = models.TextField(blank=True)

    # Class for how the Project Object will look on DB: 
    def __str__(self):
        return f"{self.project}"
