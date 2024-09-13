import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
  
const CardComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/plants');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
    
  return (
    <>
    {products.map((product) => (
        <div className="col-md-6 col-sm-6 col-lg-4 col-custom product-area " key={product._id}>
            <Link to={`plant/${product._id}`}>
              <div className="product-item">
                  <div className="single-product position-relative mr-0 ml-0">
                      <div className="product-image">
                          <a className="d-block" href="product-details.html">
                              <img src={require(`../../assets1/img/${product.image}`)} alt="" className="product-image-1 w-100"/>
                              <img src="assets/images/product/2.jpg" alt="" className="product-image-2 position-absolute w-100"/>
                          </a>
                          
                          <div className="add-action d-flex flex-column position-absolute">
                              <a href="compare.html" title="Compare">
                                  <i className="lnr lnr-sync" data-toggle="tooltip" data-placement="left" title="Compare"></i>
                              </a>
                              <a href="wishlist.html" title="Add To Wishlist">
                                  <i className="lnr lnr-heart" data-toggle="tooltip" data-placement="left" title="Wishlist"></i>
                              </a>
                          </div>
                      </div>
                      <div className="product-content">
                          <div className="product-title">
                              <h4 className="title-2"> <a href="product-details.html">{product.name}</a></h4>
                          </div>
                          <div className="product-rating">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                          </div>
                          <div className="price-box">
                              <span className="regular-price ">${product.price}</span>
                          </div>
                          <a href="cart.html" className="btn product-cart">Add to Cart</a>
                      </div>
                  </div>
              </div>
            
            </Link>
        </div>
      
    ))}
    </>
  )
}

export default CardComponent;
