import { Route, Routes } from 'react-router-dom';
import Header from '../Header';
import './App.css';
import MainPage from '../../pages/MainPage';
import BasketPage from '../../pages/BasketPage';
import NotFoundPage from '../../pages/NotFoundPage';
import ProductPage from '../../pages/ProductPage';
import Footer from '../Footer';
import CategoriesPage from '../../pages/CategoriesPage';
import ProductDescriptionPage from '../../pages/ProductDescriptionPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path='/categories' element={<CategoriesPage/>}/>
        <Route path='/basket' element={<BasketPage/>}/>
        <Route path='/*' element={<NotFoundPage/>}/>
        <Route path='/product/all' element={<ProductPage/>}/>
        <Route path='/product/:sale' element={<ProductPage/>}/>
        <Route path='/categories/:category' element={<ProductPage/>}/>
        <Route path='/product/item/:productId' element={<ProductDescriptionPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
