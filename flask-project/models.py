# -*- coding: utf-8 -*-
from extension import db

class Element(db.Model):
    __tablename__= 'element'
    id= db.Column(db.Integer, primary_key=True, autoincrement=True)
    element_name = db.Column(db.String(255), nullable=False)
    element_class = db.Column(db.String(255), nullable=False)

    @staticmethod
    def init_db():
        rets = [
            (1, 'shellcode原子组件', '攻击组件'),
            (2, '目标探测组件', '探测组件'),
            (3, '目标分析组件', '探测组件')
        ]
        for ret in rets:
            element = Element()
            element.id = ret[0]
            element.element_name = ret[1]
            element.element_class = ret[2]
            db.session.add(element)
        db.session.commit()
