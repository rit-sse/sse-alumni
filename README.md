# SSE-Member

[![CircleCI](https://circleci.com/gh/rit-sse/sse-member/tree/master.svg?style=svg)](https://circleci.com/gh/rit-sse/sse-member/tree/master)

An alumni tracking system

## Getting Started

1) Install Docker at docker.com
2) run `git clone LINK` replacing LINK with the github link
3) open a terminal/command window and navigate to where you cloned the directory
4) run `docker-compose up`
5) visit localhost:5000 in your browser to view the site.

If you make any changes to a python file, you will need to restart the docker container. Go the terminal
window and clikc CTRL-C, then run the command again

If you make a change to a css or js file, you do not need to restart the server. Simply
refresh the page and you will see you changes.

## To Run tests
In docker-compose.yml set `FLASK_CONFIG=testing`, then run docker-compose up --build
To revert back to running the server, set `FLASK_CONFIG=none`
