# Generated by Django 5.2.2 on 2025-06-08 10:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0004_chatfeedback'),
    ]

    operations = [
        migrations.AddField(
            model_name='chatfeedback',
            name='like_status',
            field=models.CharField(choices=[('like', '좋아요'), ('dislike', '싫어요'), ('none', '선택안함')], default='none', max_length=10),
        ),
    ]
