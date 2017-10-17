import os

TEMPLATES_PATH = './src/templates' if os.environ['ENV'] == "windows" else './templates'
TEMPLATES_FILTER = lambda x: x != 'base.html'
TEMPLATES_MAP = lambda x: x.split('.')[0]
STATIC_PATH = './static'

def getPages(loader):
    return list( map(TEMPLATES_MAP, filter(TEMPLATES_FILTER, loader.list_templates())) )
