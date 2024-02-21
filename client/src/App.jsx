import { Route, Routes } from 'react-router-dom'
import './App.scss'
import MainLayout from './Layouts/MainLayout'
import UserLayout from './Layouts/UserLayout'
import AboutPage from './Pages/About Page'
import AccountPage from './Pages/Account Page'
import CartPage from './Pages/Cart Page'
import CheckOutPage from './Pages/CheckOut Page'
import DetailPage from './Pages/Detail Page'
import ErrorPage from './Pages/Error Page'
import FAQPage from './Pages/FAQ Page'
import Home from './Pages/Home Page'
import Login from './Pages/Login Page'
import Register from './Pages/Register Page'
import ShopPage from './Pages/Shop Page'
import WishlistPage from './Pages/Wishlist Page'
import AdminPanel from './Pages/Admin Panel'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/detail/:id' element={<DetailPage />} />
        <Route path='*' element={<ErrorPage />} />
        <Route element={<UserLayout />} >
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckOutPage />} />
          <Route path='/account/:id' element={<AccountPage />} />
          <Route path='/admin' element={<AdminPanel />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
