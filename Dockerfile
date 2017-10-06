FROM python:3.4

WORKDIR /usr/app

ADD requirements.txt .

RUN pip install -r requirements.txt

WORKDIR /usr/app/src

ENV FLASK_APP=main.py

ENTRYPOINT flask run --host=0.0.0.0

