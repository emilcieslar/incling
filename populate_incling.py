import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'incling_project.settings')

import django
django.setup()

from incling.models import School, Classroom, Student


def populate():
    school_of_something = add_school('High School of Something')

    """Classroom A"""
    classroom_a = add_classroom('Classroom A', school_of_something)

    add_student('Emil', 'Cieslar', classroom_a)
    add_student('Karl', 'Boag', classroom_a)

    """Classroom B"""
    classroom_b = add_classroom('Classroom B', school_of_something)

    add_student('John', 'Carter', classroom_b)
    add_student('Katy', 'Bar', classroom_b)

    # Print out what we have added to the user.
    for s in School.objects.all():
        for c in Classroom.objects.filter(school=s):
            for st in Student.objects.filter(classroom=c):
                print "- {0} - {1} - {2}".format(str(s), str(c), str(st))

def add_school(name):
    s = School.objects.get_or_create(name=name)[0]
    return s

def add_classroom(name, school):
    c = Classroom.objects.get_or_create(name=name, school=school)[0]
    return c

def add_student(firstname, lastname, classroom):
    s = Student.objects.get_or_create(firstname=firstname, lastname=lastname, classroom=classroom)
    return s

# Start execution here!
if __name__ == '__main__':
    print "Starting Incling population script..."
    populate()
