TEMPLATES_PATH = './src/templates'
TEMPLATES_FILTER = lambda x: x != 'base.html'
TEMPLATES_MAP = lambda x: x.split('.')[0]

def getPages(loader):
    return list( map(TEMPLATES_MAP, filter(TEMPLATES_FILTER, loader.list_templates())) )
