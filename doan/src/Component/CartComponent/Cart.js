
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Cart = () => {

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
        try {
          const response = await axios.get('http://localhost:5000/carts/664cc47e56573b610d59df9b');
          const itemsWithPlantData = await Promise.all(response.data.map(async (item) => {
            const plantResponse = await axios.get(`http://localhost:5000/plants/plant/${item.plantID._id}`);
            return { ...item, plant: plantResponse.data };
          }));
          setCartItems(itemsWithPlantData);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      
      fetchCartItems();
    }, []);

    const handleRemoveItem = async (_id) => {
      try {
        await axios.delete(`http://localhost:5000/cart/${_id}`);
        setCartItems(cartItems.filter(item => item._id !== _id));
      } catch (err) {
        setError(err.message);
      }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const calculateTotal = () => {
      return cartItems.reduce((total, item) => total + (item.plantID.price * item.quantity), 0);
    };

    const formatNumber = (number) => {
      return new Intl.NumberFormat('de-DE').format(number);
    };

    const truncateDescription = (description, maxLength) => {
      if (description.length > maxLength) {
        return description.slice(0, maxLength) + "... read more";
      }
      return description;
    }


  return ( 
    <div className="cart-main-wrapper mt-no-text">
      <div className="container custom-area">
          <div className="row">
              <div className="col-lg-12 col-custom">
                  <div className="cart-table table-responsive">
                    <p className="mb-0">You have {cartItems.length} items in your cart</p>
                      <table className="table table-bordered">
                          <thead>
                              <tr>
                                  <th className="pro-thumbnail">Image</th>
                                  <th className="pro-title">Product</th>
                                  <th className="pro-price">Price</th>
                                  <th className="pro-quantity">Quantity</th>
                                  <th className="pro-remove">Remove</th>
                              </tr>
                          </thead>
                          <tbody>
                          {cartItems.map((item, index) => (
                              <tr key={index}>
                                  <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src={require(`../../assets1/img/${item.plantID.image}`)} alt="Product" /></a></td>
                                  <td className="pro-title">{item.plantID.name}</td>
                                  <td className="pro-price"><span>{item.plantID.price}</span></td>
                                  <td className="pro-quantity">
                                     
                                  <div className=''>{item.quantity}</div>
                                  </td>
                                  <td className="pro-remove"><a href="#" ><i className="lnr lnr-trash" ocl></i></a></td>
                              </tr>
                            ))}
                          </tbody>
                      </table>
                  </div>
                  <div className="cart-update-option d-block d-md-flex justify-content-between">
                      <div className="apply-coupon-wrapper">
                          <form action="#" method="post" className=" d-block d-md-flex">
                              <input type="text" placeholder="Enter Your Coupon Code" required />
                              <button className="btn flosun-button primary-btn rounded-0 black-btn">Apply Coupon</button>
                          </form>
                      </div>
                      <div className="cart-update mt-sm-16">
                          <a href="#" className="btn flosun-button primary-btn rounded-0 black-btn">Update Cart</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-5 ml-auto col-custom">
                  <div className="cart-calculator-wrapper">
                      <div className="cart-calculate-items">
                          <h3>Cart Totals</h3>
                          <div className="table-responsive">
                              <table className="table">
                                  <tr>
                                      <td>Sub Total</td>
                                      <td>${formatNumber(calculateTotal())}</td>
                                  </tr>
                                  <tr>
                                      <td>Shipping</td>
                                      <td>$20</td>
                                  </tr>
                                  <tr className="total">
                                      <td>Total</td>
                                      <td className="total-amount">${formatNumber(calculateTotal() + 20)}</td>
                                  </tr>
                              </table>
                          </div>
                      </div>
                      <a href="checkout.html" className="btn flosun-button primary-btn rounded-0 black-btn w-100">Proceed To Checkout</a>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Cart;
