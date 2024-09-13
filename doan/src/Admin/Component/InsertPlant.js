import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label, Form } from 'reactstrap';

const AddProductForm = () => {
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: "",
    description: "",
    price: ""
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/plants', formData);
      console.log(response.data);
      setModalMessage("Insert successfully!");
    } catch (error) {
      setModalMessage("Failed to insert. Please try again.");
      setErrorMessage('Invalid input Data');
    } finally {
      setModal(true);
    }
  };

  const closeModal = () => {
    setModal(false);
    if (modalMessage === "Insert successfully!") {
      console.log('success');
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h1 className='insert-title'>Thêm Dữ Liệu cho sản phẩm</h1>
        <FormGroup>
          <Label for="id">ID</Label>
          <Input
            type="number"
            name="id"
            id="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
            
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="category">Category</Label>
          <Input
            type="text"
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <Input
            type="text"
            name="image"
            id="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="rating">Rating</Label>
          <Input
            type="number"
            name="Rating"
            id="Rating"
            value={formData.rating}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="countInStock">Count In Stock </Label>
          <Input
            type="number"
            name="countInStock"
            id="countInStock"
            value={formData.countInStock}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            type="number"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="color">Color</Label>
          <Input
            type="text"
            name="color"
            id="color"
            value={formData.color}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button className='btn-them' type="submit" color="primary">Add Product</Button>
      </Form>

      <Modal isOpen={modal} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>Notification</ModalHeader>
        <ModalBody>{modalMessage}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={closeModal}>Close</Button>
        </ModalFooter>
      </Modal>

      {errorMessage && <p className="text-danger">{errorMessage}</p>}
    </div>
  );
};

export default AddProductForm;