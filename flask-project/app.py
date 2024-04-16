from flask import Flask
from flask.views import MethodView
from extension import db, cors
from models import Element


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///projects.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
cors.init_app(app)

@app.route('/')
def hello_world():
    return 'Hello World'

@app.cli.command()
def create():
    db.drop_all()
    db.create_all()
    Element.init_db()

class ElementApi(MethodView):
    def get(self):
        elements: [Element] = Element.query.all()
        results = [
            {
                'id': element.id,
                'element_name': element.element_name,
                'element_class': element.element_class
            }for element in elements
        ]
        return{
            'status': 'success',
            'message': '数据查询成功',
            'results': results
        }

if __name__ == '__main__':
    app.run(debug=True)