import { Route, Routes } from 'react-router-dom';
import Header from '../Header';
import './App.css';
import MainPage from '../../pages/MainPage';
import BasketPage from '../../pages/BasketPage';
import NotFoundPage from '../../pages/NotFoundPage';
import ProductPage from '../../pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path='/basket' element={<BasketPage/>}/>
        <Route path='/*' element={<NotFoundPage/>}/>
        <Route path='/product/:sale' element={<ProductPage/>}/>
        <Route path='/product/:category' element={<ProductPage/>}/>
        <Route path='/product/all' element={<ProductPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
