# Generated by Django 4.2 on 2023-05-02 15:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_project_project_order_project_asset_asset_order'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='project',
            options={'ordering': ['project_order']},
        ),
        migrations.AlterModelOptions(
            name='project_asset',
            options={'ordering': ['asset_order']},
        ),
        migrations.RemoveField(
            model_name='project',
            name='category',
        ),
        migrations.RemoveField(
            model_name='project',
            name='homepage',
        ),
        migrations.AddField(
            model_name='project',
            name='category_type',
            field=models.PositiveSmallIntegerField(choices=[('3', 'Music'), ('4', 'Commercial')], default=None),
        ),
        migrations.AddField(
            model_name='project',
            name='on_homepage',
            field=models.PositiveSmallIntegerField(choices=[('0', 'Yes'), ('1', 'No / Not Yet')], default=None),
        ),
        migrations.AddField(
            model_name='project_asset',
            name='content_orientation',
            field=models.PositiveSmallIntegerField(choices=[('6', 'Portrait'), ('7', 'Landscape')], default=None),
        ),
        migrations.AlterField(
            model_name='project',
            name='description',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='project',
            name='project_order',
            field=models.PositiveSmallIntegerField(blank=True, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='project_asset',
            name='asset_order',
            field=models.PositiveSmallIntegerField(blank=True, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='project_asset',
            name='content_description',
            field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name='project_asset',
            name='content_url_number',
            field=models.PositiveSmallIntegerField(),
        ),
    ]