import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button, Card, CardImg, CardTitle, CardBody, Col, ContainerProps, Row } from 'reactstrap';
import "../assets/css/admin.css";

const AdminPlant = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const response = await axios.get('http://localhost:5000/plants');
      setPlants(response.data);
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/plants/plant/delete/${itemId}`);
      setPlants(plants.filter(item => item._id !== itemId));
      window.location.reload();
    } catch (err) {
      console.error('Error removing item:', err);
    }
  };

  return (
      <div className="plant-list" >
        <h2>QUẢN LÝ THÔNG TIN SẢN PHẨM</h2>
        <button 
                    className="btn-them btn-round "
                    color="default"
                    to="/insert"
                    outline
                    size="lg"
                    tag={Link} >Thêm Sản Phẩm</button>
        <table> 
          <thead>
            <tr>
              <th>Mã Sản Phẩm</th>
              <th>Tên Sản Phẩm</th>
              <th >Ảnh Sản Phẩm</th>
              <th>Hạng Mục</th>
              <th>Giới Thiệu</th>
              <th>Giá Cả</th>
              <th>Xử lý</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant) => (
              <tr key={plant._id}>
                <td>{plant._id}</td>
                <td>{plant.name}</td>
                <td><CardImg
                  className='image-size'
                  top
                  width="1px"
                  src={require(`../../assets1/img/${plant.image}`)}
                  alt={plant.name}
                /></td>
                <td>{plant.category}</td>
                <td>{plant.description}</td>
                <td>{plant.price}</td>
                <td>
                  <button className="btn-sua" >Sửa</button>
                  <button className="btn-xoa" onClick={() => handleRemoveItem(plant._id)}>Xóa</button>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default AdminPlant;