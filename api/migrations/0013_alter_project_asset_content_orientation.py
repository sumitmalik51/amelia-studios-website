# Generated by Django 4.2 on 2023-05-02 15:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_alter_project_options_alter_project_asset_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project_asset',
            name='content_orientation',
            field=models.PositiveSmallIntegerField(choices=[('6', 'Portrait'), ('7', 'Landscape')], default=False),
        ),
    ]