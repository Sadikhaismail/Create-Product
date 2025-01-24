import React, { useState } from 'react';
import './App.css';
import AdminCreatePage from './Components/AdminCreateProduct';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import ProductPage from './Components/ProductPage';
import ProductGallery from './Components/ProductGallery';
import GeneralMeta from './Components/GeneralMeta';
import Footer from './Components/Footer';
import PublishForm from './Components/PublishForm';
import PublishSchedule from './Components/PublishSchedule';
import ProductCategories from './Components/ProductCategories';
import ProductTags from './Components/ProductTag';
import ShortDescription from './Components/ShortDescription';
import Submit from './Components/Submit';

function App() {
  // State for all components
  const [productPageData, setProductPageData] = useState({});
  const [productGalleryData, setProductGalleryData] = useState({});
  const [generalMetaData, setGeneralMetaData] = useState({});
  const [publishFormData, setPublishFormData] = useState({});
  const [publishScheduleData, setPublishScheduleData] = useState({});
  const [productCategoriesData, setProductCategoriesData] = useState([]);
  const [productTagsData, setProductTagsData] = useState([]);
  const [shortDescriptionData, setShortDescriptionData] = useState('');

  // Submit handler
  const handleSubmit = () => {
    const formData = {
      productPageData,
      productGalleryData,
      generalMetaData,
      publishFormData,
      publishScheduleData,
      productCategoriesData,
      productTagsData,
      shortDescriptionData,
    };

    console.log('Submitting data:', formData);

    // Here, you can send `formData` to an API
    // Example: axios.post('/api/submit', formData).then(response => console.log(response));
  };

  return (
    <div className="App">
      <Header />
      <AdminCreatePage />
      <div className="publish-form-container">
        <PublishForm onChange={(data) => setPublishFormData(data)} />
        <PublishSchedule onChange={(data) => setPublishScheduleData(data)} />
        <ProductCategories onChange={(data) => setProductCategoriesData(data)} />
        <ProductTags onChange={(data) => setProductTagsData(data)} />
        <ShortDescription onChange={(data) => setShortDescriptionData(data)} />
      </div>
      <ProductPage onChange={(data) => setProductPageData(data)} />
      <ProductGallery onChange={(data) => setProductGalleryData(data)} />
      <GeneralMeta onChange={(data) => setGeneralMetaData(data)} />
      <Submit onClick={handleSubmit} />
      <Footer />
      <Sidebar />
    </div>
  );
}

export default App;
