import os
import sys
import unittest

# add the src directory to import scope
sys.path.insert(0, '../src')

# import source modules
import main

class TestRouting(unittest.TestCase):

    def setUp(self):
        main.app.testing = True
        self.app = main.app.test_client()

    def testRouting(self):
        with main.app.test_request_context():
            assert main.render('undefined page') == '404'

if __name__ == '__main__':
    unittest.main()
