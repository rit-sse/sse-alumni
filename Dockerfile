FROM python:3.6

WORKDIR /usr/app

ADD requirements.txt .

RUN pip install -r requirements.txt

ADD start.sh .

RUN chmod a+x start.sh

ADD ./test test/

ENV FLASK_APP=main.py

ENTRYPOINT [ "./start.sh" ]
