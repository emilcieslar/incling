from __future__ import unicode_literals

from django.db import models

"""
School model
"""
class School(models.Model):
    name = models.CharField(max_length=128)

    def __unicode__(self):
        return self.name

"""
Classroom model
"""
class Classroom(models.Model):
    name = models.CharField(max_length=128)
    school = models.ForeignKey(School, on_delete=models.CASCADE, related_name='classrooms')

    def __unicode__(self):
        return self.name

"""
Student model
"""
class Student(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE, related_name='students')

    def __unicode__(self):
        return u'%s %s' % (self.firstname, self.lastname)
