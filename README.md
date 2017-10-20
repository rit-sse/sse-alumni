# SSE-Member

[![CircleCI](https://circleci.com/gh/rit-sse/sse-member/tree/master.svg?style=svg)](https://circleci.com/gh/rit-sse/sse-member/tree/master)

An alumni tracking system

## Getting Started...

## Mac

### With Docker on Mac

<details>
<summary>Instructions</summary>
    
1. Install Docker at docker.com
2. run `git clone LINK` replacing LINK with the github link
3. open a terminal/command window and navigate to where you cloned the directory
4. run `docker-compose up`
5. visit localhost:5000/members in your browser to view the site.
</details>

### Without Docker on Mac

<details>
<summary>Instructions</summary>
    
1. Install python 3 if it hasn't already been installed (also installs pip) `brew install python3`
2. `cd` into the folder where you plan on developing
3. `git clone <repo>`, where `<repo>` is the clone url
4. `cd sse-member` to get into the project folder
5. Install necessary dependencies with `sudo -H pip install -r requirements.txt`
6. Run the project with `FLASK_APP=src/main.py ENV=windows python -m flask run`
7. Stop the server with `CTRL+c`
</details>

## Linux

### With Docker on Linux

<details>
<summary>Instructions</summary>
    
1. Install Docker at docker.com
2. run `git clone LINK` replacing LINK with the github link
3. open a terminal/command window and navigate to where you cloned the directory
4. run `docker-compose up`
5. visit localhost:5000/members in your browser to view the site.
</details>

### Without Docker on Linux

<details>
<summary>Instructions</summary>
    
1. Install python 3 and pip if it hasn't already been installed `sudo apt-get -y install python3 python3-pip`
2. `cd` into the folder where you plan on developing
3. `git clone <repo>`, where `<repo>` is the clone url
4. `cd sse-member` to get into the project folder
5. Install necessary dependencies with `sudo -H pip install -r requirements.txt`
6. Run the project with `FLASK_APP=src/main.py ENV=windows python -m flask run`
7. Stop the server with `CTRL+c`
</details>
    
## Windows

### With Docker on Windows

<details>
<summary>Instructions</summary>
    
If you haven't already installed Docker before, you can skip step 1.

1. Uninstall Docker. On Windows Start Menu Search, search “uninstall” and click the first option. Scroll until you find “Docker for Windows” and uninstall it. 
2. In Windows Start Menu Search, search “windows features” and click the first option. Scroll down until you See “Hyper-V” and uncheck it. It may already be unchecked. (More help: http://www.poweronplatforms.com/enable-disable-hyper-v-windows-10-8/)
3. Reboot Machine
4. Download Docker Toolbox for Windows  available here https://www.docker.com/products/docker-toolbox
5. Once fully installed, go to Windows Search, type “Docker” and click Docker Terminal QuickStart. Let it do it’s thing and after installed, you will have a command prompt.
6. Use it as you normally would. cd to our project, run `docker-compose up` and it should build and be good to go!
7. The server should be running. Open Kitematic (search for it). If prompted, click "use VirtualBox". You should see sse-member on the left side. Click it, then click ports. You should see numbers like 169.168.x.x:5000 (it will be different). Copy that to your brower and you should see our page! You should actually see a 404, which is good! Append /members to the end and you will see our alumni home page!
</details>

### Without Docker on Windows

<details>
<summary>Instructions</summary>
    
1. Install the lastest version of [Python 3](https://www.python.org/downloads/release/python-363/), making sure to tick the checkbox to add Python to your PATH on the first page of the install wizard.
2. Install pip, the Python package manager:
    1. Download the [get-pip.py](https://bootstrap.pypa.io/get-pip.py) script to your computer
    2. Open the folder where you installed it, SHIFT+right-click on some whitespace in the folder in File Explorer, and click "Open PowerShell window here".
    3. run `python .\get-pip.py`
3. Install [git for Windows](https://git-scm.com/download/win)
4. Open git bash
5. `cd` into the folder where you plan on developing
6. `git clone <repo>`, where `<repo>` is the clone url
7. `cd sse-member` to get into the project folder
8. Install the dependancies by running `pip install -r requirements.txt`
9. Run the project with ` FLASK_APP=src/main.py ENV=windows python -m flask run`
10. Stop the server with `CTRL+c`
</details>
   
# 
If you make any changes to a python file, you will need to restart the docker container. Go the terminal
window and click CTRL-C, then run the command again

If you make a change to a css or js file, you do not need to restart the server. Simply
refresh the page and you will see you changes.

## To Run tests
In docker-compose.yml set `FLASK_CONFIG=testing`, then run docker-compose up --build
To revert back to running the server, set `FLASK_CONFIG=none`
