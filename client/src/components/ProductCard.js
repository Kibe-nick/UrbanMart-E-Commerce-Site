import React from 'react'
import './ProductCard.css'

function ProductCard({product, onAddToCart}) {
  return (
    <div className="product-card">
      <img
        src={product.image_url}
        alt={product.name}
        className="product-image"
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">${product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <img
        src="/add-to-cart.png"
        alt="Add to cart"
        className="add-to-cart"
        title='Add to cart'
        onClick={() => onAddToCart(product)}
      />
    </div>
  );
}

export default ProductCard