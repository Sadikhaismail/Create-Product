import React from 'react';
import './App.css';
import AdminCreatePage from './Components/AdminCreateProduct';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import ProductPage from './Components/ProductPage';
import ProductGallery from './Components/ProductGallery';
import GeneralMeta from "./Components/GeneralMeta";
import Footer from './Components/Footer';
import PublishForm from "./Components/PublishForm";


function App() {
  return (
    <div className="App">
      <Header />
      <AdminCreatePage />
      <div className="publish-form-container">
        <PublishForm />
      </div>
      <ProductPage />
      
      <ProductGallery />
      <GeneralMeta />
      <Footer />
      <Sidebar />
      
    </div>
  );
}

export default App;
