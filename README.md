# SSE-Member

[![CircleCI](https://circleci.com/gh/rit-sse/sse-member/tree/master.svg?style=svg)](https://circleci.com/gh/rit-sse/sse-member/tree/master)

An alumni tracking system

## Getting Started...

### ...With Docker

1) Install Docker at docker.com
2) run `git clone LINK` replacing LINK with the github link
3) open a terminal/command window and navigate to where you cloned the directory
4) run `docker-compose up`
5) visit localhost:5000/members in your browser to view the site.

### ...Without Docker on *nix

TODO: Document this

### ...Without Docker on Windows

1) Install the lastest version of [Python 3](https://www.python.org/downloads/release/python-363/), making sure to tick the checkbox to add Python to your PATH on the first page of the install wizard.
2) Install pip, the Python package manager:
    a) Download the [get-pip.py](https://bootstrap.pypa.io/get-pip.py) script to your computer
    b) Open the folder where you installed it, SHIFT+right-click on some whitespace in the folder in File Explorer, and click "Open PowerShell window here".
    c) run `python .\get-pip.py`
3) Install [git for Windows](https://git-scm.com/download/win)
4) Open git bash
5) `cd` into the folder where you plan on developing
6) `git clone <repo>`, where `<repo>` is the clone url
7) `cd sse-member` to get into the project folder
8) Install the dependancies by running `pip install -r requirements.txt`
9) Run the project with ` FLASK_APP=src/main.py ENV=windows python -m flask run`
10) Stop the server with `CTRL+c`

If you make any changes to a python file, you will need to restart the docker container. Go the terminal
window and clikc CTRL-C, then run the command again

If you make a change to a css or js file, you do not need to restart the server. Simply
refresh the page and you will see you changes.

## To Run tests
In docker-compose.yml set `FLASK_CONFIG=testing`, then run docker-compose up --build
To revert back to running the server, set `FLASK_CONFIG=none`
