import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button, Card, CardImg, CardTitle, CardBody, Col, ContainerProps, Row } from 'reactstrap';
import "../assets/css/admin.css";

const AdminOrderPlant = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
        try {
          const response = await axios.get('http://localhost:5000/carts/664cc47e56573b610d59df9b');
          const itemsWithPlantData = await Promise.all(response.data.map(async (item) => {
            const plantResponse = await axios.get(`http://localhost:5000/plants/plant/${item.plantID._id}`);
            // const accResponse = await axios.get(`http://localhost:5000/accounts/${item.accID._id}`);
            return { ...item, plant: plantResponse.data};
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
      <h1>Quản lý order đơn hàng</h1>
    <div className=" custom-area">
        <div className="row">
            <div className="col-lg-12 col-custom">
                <div className="cart-table table-responsive">
                  <p className="mb-0">You have {cartItems.length} items in your cart</p>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="pro-thumbnail">Mã id người mua</th>
                                <th className="pro-thumbnail">Hình ảnh</th>
                                <th className="pro-title">Tên sản phẩm</th>
                                <th className="pro-quantity">Sô lượng</th>
                                <th className="pro-price">Giá</th>
                                <th className="pro-remove">Xử lý</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cartItems.map((item, index) => (
                            <tr key={index}>
                                <td>{item.accID}</td>
                                <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src={require(`../../assets1/img/${item.plantID.image}`)} alt="Product" /></a></td>

                                <td>{item.plantID.name}</td>
                                <td className="pro-quantity">
                                  <div >{item.quantity}</div>
                                </td>
                                
                                <td>{item.plantID.price} VND</td>
                                <td className="pro-remove"> <button className="btn-sua" >Cập nhập</button>
                                <button className="btn-xoa" onClick={() => handleRemoveItem(item._id)}>Hủy</button>
                              </td>

                            </tr>
                          ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-5 ml-auto col-custom">
                <div className="cart-calculator-wrapper">
                    <div className="cart-calculate-items">
                        <h3>Hóa đơ hành hóa</h3>
                        <div className="table-responsive">
                            <table className="table">
                                <tr>
                                    <td>Tổng tiền</td>
                                    <td>{formatNumber(calculateTotal())}VND</td>
                                </tr>
                                <tr>
                                    <td>Phí giao hàng</td>
                                    <td>20.000</td>
                                </tr>
                                <tr className="total">
                                    <td>Tổng Tiền</td>
                                    <td className="total-amount">{formatNumber(calculateTotal() + 20000)}VND</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <a href="checkout.html" className="btn flosun-button primary-btn rounded-0 black-btn w-100">Thanh toán hóa đơn</a>
                </div>
            </div>
        </div>
    </div>
  </div>
  );
};

export default AdminOrderPlant;