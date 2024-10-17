from flask import jsonify, make_response, request, session
from flask_restful import Resource

from config import app, db, api
from models import Product

class AllProductsResource(Resource):
    def get(self):
        products = [product.to_dict() for product in Product.query.all()]
        return make_response(jsonify(products), 200)
    
api.add_resource(AllProductsResource, '/products', endpoint='products')

if __name__ == '__main__':
    app.run(port=5555, debug=True)