# Create your tests here.
from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status
import json
from .models import Project, Project_Asset
from .serializers import ProjectSerializer

client = Client()

class GetAllProjectsTest(TestCase):

    def setUp(self):
        music_project = Project.objects.create(
            homepage=False,
            category='music',
            client_name='Client A',
            title='Music Project',
            project_type='audio',
            description='Description for Music Project'
        )
        commercial_project = Project.objects.create(
            homepage=True,
            category='commercial',
            client_name='Client B',
            title='Commercial Project',
            project_type='video',
            description='Description for Commercial Project'
        )
        Project_Asset.objects.create(
            project=music_project,
            content_url='http://example.com/music.jpg',
            content_description='Music Project Photo'
        )
        Project_Asset.objects.create(
            project=commercial_project,
            content_url='http://example.com/commercial.jpg',
            content_description='Commercial Project Photo'
        )

    def test_get_all_projects(self):
        response = client.get(reverse('project-list'))

        projects = Project.objects.all()
        serialized_projects = ProjectSerializer(projects, many=True).data
        for project in serialized_projects:
            project_asset = Project_Asset.objects.filter(project_id=project['id'])
            project['assets'] = [{'url': asset.content_url, 'description': asset.content_description} for asset in project_asset]

        print(json.dumps(serialized_projects, indent=4)) # <-- add this line to print the formatted JSON object

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(json.loads(response.content), serialized_projects)
