from rest_framework import serializers
from incling.models import School, Classroom, Student


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('firstname', 'lastname')


class ClassroomSerializer(serializers.ModelSerializer):
    students = StudentSerializer(many=True, read_only=True)

    class Meta:
        model = Classroom
        fields = ('name', 'students')
