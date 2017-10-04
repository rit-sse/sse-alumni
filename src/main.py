import jinja2
from consts import *
from flask import Flask, redirect, url_for
app = Flask(__name__)

def render(page):
    loader = jinja2.FileSystemLoader(TEMPLATES_PATH)
    env = jinja2.Environment(loader=loader, autoescape=jinja2.select_autoescape(['html']))
    if not page in getPages(loader):
        return '404'
    else:
        return env.get_template(page + '.html').render()

@app.route("/")
def index():
    return render('home')


@app.route("/<route>")
def router(route):
    return render(route)

