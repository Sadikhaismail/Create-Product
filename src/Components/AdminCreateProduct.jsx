import React, { useState } from 'react';
import axios from 'axios';
import './AdminCreateProduct.css';

const AdminCreateProduct = () => {
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    setProductData({ ...productData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', productData.title);
    formData.append('description', productData.description);
    formData.append('category', productData.category);
    formData.append('price', productData.price);
    formData.append('image', productData.image);

    try {
      const response = await axios.post('http://localhost:5000/api/products', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Product created successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="create-product-container">
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={productData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Product Description"
            value={productData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            name="category"
            placeholder="Product Category"
            value={productData.category}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="Product Price"
            value={productData.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input type="file" name="image" onChange={handleImageChange} />
        </div>
        <button type="submit" className="submit-button">Create Product</button>
      </form>
    </div>
  );
};

export default AdminCreateProduct;
