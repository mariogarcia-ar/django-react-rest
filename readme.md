# Django
```bash 
pip install django==4.2
pip install djangorestframework
pip install django-cors-headers
pip install coreapi
pip install coreapi-cli
```

- see https://pypi.org/project/django-cors-headers/ 
- see https://pypi.org/project/django-coreapi/ 
    Core API helpers for Django and Django Rest Framework

```bash
django-admin startproject myreactrest .
django-admin startapp tasks 

python manage.py makemigrations
python manage.py migrate

python manage.py createsuperuser
```

see https://github.com/FaztWeb/djangorestframework_crud 

create the serializer 

vscode: select the python version for anaconda

- now create api.py for the viewsets
- now create the routers
- now http://127.0.0.1:8000/ response 
- http://127.0.0.1:8000/api/taskss/ Allow to create new taskss

deploy on render.com https://render.com/pricing#compute 

# React
Install Vite 
```bash
npm create vite

cd client
npm install
npm run dev

```
see https://vitejs.dev/

open http://localhost:5173/ 

routers 
```bash
npm i react-router-dom 
npm i react-hot-toast
npm i react-hook-form
npm i axios
```

install https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets