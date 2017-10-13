#!/bin/bash



if [ "$FLASK_CONFIG" = "testing" ]; then
    cd ./test
    python main.test.py
else
    cd ./src
    flask run --host=0.0.0.0
fi
