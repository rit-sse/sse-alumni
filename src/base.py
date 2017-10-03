from pystache import TemplateSpec
from pages.hello.hello import Hello

class BasePage(TemplateSpec):
    def route(self, text=None):
        

    def page(self):
        return Hello()
