from flask import Flask
from api import app

# Create a Flask application instance
app = Flask(__name__)

if __name__ == '__main__':
    # Run the Flask application
    app.run()
