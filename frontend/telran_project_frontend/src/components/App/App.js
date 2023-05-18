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
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/slice/productSlice';
import { fetchCategories } from '../../store/slice/categorySlice';
import ContactPage from '../../pages/ContactPage';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  }, [])
  
  return (
    <div className="App">
      <ToastContainer
        transition={Flip}
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
