# Incling Django Task

## Installation guide

1. Clone the project and enter the incling directory

    ```
    git clone https://github.com/emilcieslar/incling.git
    cd incling
    ```

2. Install requirements.txt to your new virtual environment

    ```
    pip install -r requirements.txt
    ```

3. Migrate the migrations

    ```
    python manage.py migrate
    ```

4. [Optional] I've created a population script with some basic data to work with so you can run it

    ```
    python populate_incling.py
    ```

5. Run the server and visit API root on [http://127.0.0.1:8000/incling/](http://127.0.0.1:8000/incling/)

    ```
    python manage.py runserver
    ```

6. Open up a new terminal window, enter the incling_frontend directory and install dependencies

    ```
    cd incling_frontend
    npm install
    ```

7. Run the front-end server using the command below and visit it on [http://localhost:3000/](http://localhost:3000/)

    ```
    npm run start
    ```


## Notes

### Bootstrap
I decided not to use Bootstrap as I believe that would be an overkill for such small project. Also I felt like I could show more by using advanced techniques with SCSS and BEM methodology. I believe these front-end techniques are very useful when it comes to larger apps: [csswizardry - BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) and also [namespacing with BEM](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/) In case you'd still require the bootstrapped version of this app, just let me know and I'll reengineer the code.

### Separating Backend and Frontend
I could include the frontend part within the django project as it is suggested [in this article](http://blog.kevinastone.com/getting-started-with-django-rest-framework-and-angularjs.html). However I thought in this case it will be cleaner and more readable just to separate the frontend completely from the backend. That's also a reason why I had to install one more dependency, which was django-cors-headers to allow different hosts interact with the API.
