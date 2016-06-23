# Incling Django Task

## Installation guide

1. Clone the project and enter the incling directory

    `git clone https://github.com/emilcieslar/incling.git`

    `cd incling`

2. Install requirements.txt to your new virtual environment

    `pip install -r requirements.txt`

3. Migrate the migrations

    `python manage.py migrate`

4. [Optional] I've created a population script with some basic data to work with so you can run it

    `python populate_incling.py`

5. Run the server and visit API root on [http://127.0.0.1:8000/incling/]

    `python manage.py runserver`
