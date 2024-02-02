import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './Layouts/MainLayout'
import AboutPage from './Pages/About Page'
import FAQPage from './Pages/FAQ Page'
import ShopPage from './Pages/Shop Page'
import Home from './Pages/Home Page'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Route>
    </Routes>
  )
}

export default App
