from flask import jsonify, make_response, request, session
from flask_restful import Resource

from config import app, db, api
from models import Product, User

class AllProductsResource(Resource):
    def get(self):
        products = [product.to_dict() for product in Product.query.all()]
        return make_response(jsonify(products), 200)
    
class AllUsersResource(Resource):
    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return make_response(jsonify(users), 200)
    
api.add_resource(AllProductsResource, '/products', endpoint='products')
api.add_resource(AllUsersResource, '/users', endpoint='users')    

if __name__ == '__main__':
    app.run(port=5555, debug=True)