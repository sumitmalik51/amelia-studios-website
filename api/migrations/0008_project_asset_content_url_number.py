# Generated by Django 4.2 on 2023-04-17 16:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_remove_project_asset_content_1_description_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='project_asset',
            name='content_url_number',
            field=models.PositiveIntegerField(default=None),
        ),
    ]
