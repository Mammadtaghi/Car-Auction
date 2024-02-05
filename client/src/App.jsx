import { Route, Routes } from 'react-router-dom'
import './App.scss'
import MainLayout from './Layouts/MainLayout'
import AboutPage from './Pages/About Page'
import FAQPage from './Pages/FAQ Page'
import ShopPage from './Pages/Shop Page'
import Home from './Pages/Home Page'
import UserLayout from './Layouts/UserLayout'
import WishlistPage from './Pages/Wishlist Page'
import CartPage from './Pages/Cart Page'
import CheckOutPage from './Pages/CheckOut Page'
import AccountPage from './Pages/Account Page'
import ErrorPage from './Pages/Error Page'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route element={<UserLayout />} >
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckOutPage />} />
          <Route path='/user/:id' element={<AccountPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
