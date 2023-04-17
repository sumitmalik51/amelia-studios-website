from django.db import models
from django.core.validators import URLValidator
from django.core.exceptions import ValidationError


# Create your models here.
class Project(models.Model):
    homepage = models.BooleanField(default=False)
    category = models.CharField(max_length=100, choices=[(
        'music', 'Music'), ('commercial', 'Commercial')])
    client_name = models.CharField(max_length=100)
    project_title = models.CharField(max_length=100)
    project_type = models.CharField(max_length=100)
    description = models.TextField()

    # Method for how the Project Object will look on DB:
    def __str__(self):
        return f"{self.client_name} - {self.project_title}"


class Project_Asset(models.Model):
    project = models.ForeignKey(
        Project, related_name='assets', on_delete=models.CASCADE)
    content_url = models.URLField(validators=[URLValidator()])
    content_url_number = models.PositiveIntegerField(null=False, blank=False)
    content_description = models.TextField(max_length=500)

    # Method for how the Project Object will look on DB:
    def __str__(self):
        return f"{self.project} - Asset {self.content_url_number}"

    # Method for checking if the content_url_number field is between 1 and 10, if not, raises ValidationError
    def clean(self):
        if not 1 <= self.content_url_number <= 10:
            raise ValidationError('Content URL number must be between 1 and 10.')
