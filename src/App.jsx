
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import BasketPages from './pages/BasketPages/BasketPages';
import WishListPage from './pages/WishListPage/WishListPage';
import AdminLayout from './pages/AdminPanel/AdminLayout/AdminLayout';
import Admin from './pages/AdminPanel/Admin/Admin';
import AddProduct from './pages/AdminPanel/AddProduct/AddProduct';
import UpdateProduct from './pages/AdminPanel/UpdateProduct/UpdateProduct';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MainProvider from './context/MainProvider';
function App() {


  return (
    <>
    <MainProvider>
    <HelmetProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/basket" element={<BasketPages />} />
          <Route path="/wishlist" element={<WishListPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="/admin/add" element={<AddProduct/>} />
          <Route path="/admin/update/:id" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
    </MainProvider>
    </>
  )
}

export default App
