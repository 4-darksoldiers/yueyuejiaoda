from django.db import models
from django.utils import timezone




class Activity(models.Model):
    aid = models.AutoField(primary_key=True)
    atype1 = models.CharField(max_length=10, blank=True, null=True)
    atype2 = models.CharField(max_length=10, blank=True, null=True)
    tasknum = models.IntegerField(blank=True, null=True)
    tasksum = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Activity'

class Task(models.Model):
    tid = models.AutoField(primary_key=True)
    tname = models.CharField('任务名',max_length=20, blank=True, null=True)
    aid = models.ForeignKey('Activity',related_name='task',db_column='aid',on_delete=models.CASCADE)
    intro = models.CharField('任务简介',max_length=100, blank=True, null=True)
    tstart = models.TimeField('开始时间', default=timezone.now())
    tend = models.TimeField('结束时间', default=timezone.now())
    account = models.ForeignKey('auth.User', related_name='task', db_column='account', on_delete=models.CASCADE)
    
    class Meta:
        managed = False
        db_table = 'Task'

class Enroll(models.Model):
    eid = models.AutoField(primary_key=True)
    tid = models.ForeignKey('Task',related_name='enroll',db_column='tid',on_delete=models.CASCADE)
    account = models.ForeignKey('auth.User', related_name='enroll',db_column='account', on_delete=models.CASCADE)

    class Meta:
        managed = False
        db_table = 'Enroll'
        unique_together = (('tid', 'account'),)
        ordering = ['tid']




# Create your models here.
