from rest_framework import viewsets
from models import Student, Classroom
from serializers import StudentSerializer, ClassroomSerializer


class StudentViewSet(viewsets.ModelViewSet):
    """
    This endpoint presents students
    """
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class ClassroomViewSet(viewsets.ModelViewSet):
    """
    This endpoint presents classrooms

    Each classroom has a number of students related to it
    """
    queryset = Classroom.objects.all()
    serializer_class = ClassroomSerializer
