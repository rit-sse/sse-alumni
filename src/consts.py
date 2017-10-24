import os

TEMPLATES_PATH = './templates'
if 'ENV' in os.environ:
    TEMPLATES_PATH = './src/templates' if os.environ['ENV'] == "windows" else TEMPLATES_PATH
TEMPLATES_FILTER = lambda x: x != 'base.html'
TEMPLATES_MAP = lambda x: x.split('.')[0]
STATIC_PATH = './static'

def getPages(loader):
    return list( map(TEMPLATES_MAP, filter(TEMPLATES_FILTER, loader.list_templates())) )
