# Incling Django Task

## Installation guide

1. Clone the project
    `git clone https://github.com/emilcieslar/incling.git`

2. Install requirements.txt to your new virtual environment
    `pip install -r requirements.txt`

3. Make migrations to set up the database
    `python manage.py makemigrations incling`
    `python manage.py migrate`

4. [Optional] I've created a population script with some basic data to work with so you can run it
    `python populate_incling.py`
