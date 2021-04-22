import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "../css/ProductDescription.css";


const ProductDescription = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({});


  useEffect(() => {

    console.log(id)
    fetch("http://localhost:5055/products/" + id)
      .then(res => res.json())
      .then((products) => {

        setProduct(products.body[0])
        console.log(products.body[0]);
      })
      .catch(err => console.log(`Error ${err}`));

  }, [])


  return (

    <section id="product-description-section" style={{ backgroundColor: '#b3d1ff' }}>
      <div className="product-container" >

        <img className="product-image" src={'/images/' + product.image} alt="" />

        <div className="product-description-content-area">
          <h5>{product.title}</h5>
          <p>${product.price}</p>
          <p>{product.description}</p>
          {/* <div className="product_rating">
           {Array(product.rating)
            .fill()
            .map((rate) => (
              <p>⭐</p>
            ))} 
        </div> */}
          <p>Rating: {product.rating}</p>
          <label for="quantity">Quantity: </label>

          <select name="quantity" id="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">5</option>
          </select>
          <div>
            <p><button>Add to Cart</button></p>
          </div>
        </div>
      </div>

    </section>
  )

}

export default ProductDescription
