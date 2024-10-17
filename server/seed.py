from models import Product
from config import db, app

def seed_products():
    # Clear products table
    Product.query.delete()
    db.session.commit()

    products = [
        {
            "name": "Chrysanthemum",
            "price": 5.30,
            "description": "A beautiful Chrysanthemum flower",
            "image_filename": "chrysanthemum.jpg"
        },
        {
            "name": "Hibiscus",
            "price": 4.50,
            "description": "A lovely Hibiscus flower",
            "image_filename": "hibiscus.jpg"
        },
        {
            "name": "Lotus",
            "price": 6.00,
            "description": "A stunning Lotus flower",
            "image_filename": "lotus.jpg"
        },
        {
            "name": "Marguerite",
            "price": 3.75,
            "description": "A charming Marguerite flower",
            "image_filename": "marguerite.jpg"
        },
        {
            "name": "Rose",
            "price": 7.50,
            "description": "A beautiful Rose flower",
            "image_filename": "rose.jpg"
        },
        {
            "name": "Wheat Flower",
            "price": 2.50,
            "description": "A lovely Wheat Flower",
            "image_filename": "wheatflower.jpg"
        }
    ]

    image_file_path = 'server/static/images/products/'

    for product in products:
        new_product = Product(
            name=product['name'],
            price=product['price'],
            image_url=f'{image_file_path}{product["image_filename"]}',
            description=product['description'],
        )
        
        db.session.add(new_product)
        db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        seed_products()