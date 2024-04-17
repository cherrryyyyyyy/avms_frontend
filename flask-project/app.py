from flask import request
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
    def get(self, element_id):
        if not element_id:
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
        element: [Element] = Element.query.get(element_id)
        return {
            'status': 'success',
            'message': '数据查询成功',
            'results': {
                'id': element.id,
                'element_name': element.element_name,
                'element_class': element.element_class
            }
        }
    def post(self):
        form = request.json
        element = Element()
        element.element_name = form.get('element_name')
        element.element_class = form.get('element_class')
        db.session.add(element)
        db.session.commit()

        return {
            'status': 'success',
            'message': '数据添加成功'
        }

    def delete(self, id):
        element = Element.query.get(id)
        db.session.delete(element)
        db.session.commit()
        return {
            'status': 'success',
            'message': '数据删除成功'
        }

    def put(self, id):
        element: Element = Element.query.get(id)




element_view = ElementApi.as_view('element_api')
app.add_url_rule('/elements/', defaults={'element_id': None}, view_func=element_view, methods=['GET',])
app.add_url_rule('/elements', view_func=element_view, methods=['POST', ])
app.add_url_rule('/elements/<int:element_id>', view_func=element_view, methods=['GET', 'PUT', 'DELETE'])
if __name__ == '__main__':
    app.run(debug=True)