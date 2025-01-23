// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="product-list-container">
//       <h1>Product List</h1>
//       <div className="product-grid">
//         {products.map((product) => (
//           <div key={product._id} className="product-card">
//             <img src={`http://localhost:5000/${product.image}`} alt={product.title} />
//             <h3>{product.title}</h3>
//             <p>{product.description}</p>
//             <p><strong>Category:</strong> {product.category}</p>
//             <p><strong>Price:</strong> ${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
