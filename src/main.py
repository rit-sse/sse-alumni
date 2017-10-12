import jinja2
from consts import *
import flask
from flask import Flask, render_template, send_from_directory, request
app = flask.Flask(__name__)

def render(page):
    print(request.path)
    loader = jinja2.FileSystemLoader(TEMPLATES_PATH)
    env = jinja2.Environment(loader=loader, autoescape=jinja2.select_autoescape(['html']))
    if not page in getPages(loader):
        return '404'
    else:
        return flask.render_template(page + '.html', name=page)

@app.route("/")
def index():
    return render('home')


@app.route("/<route>")
def router(route):
    return render(route)

@app.route('/res/<path:path>')
def static_resources(path):
    print(STATIC_PATH)
    return flask.send_from_directory(STATIC_PATH, path)
