import React from 'react'
import { Routes } from 'react-router-dom'
import {Routes , Route} from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder'
const App = () => {
  return (
    <div className= 'px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
     <Routes>
      <Route path = '/' element={<Home />} />
      <Route path = '/collection' element={<Collection />} />
      <Route path = '/about' element={<About />} />
      <Route path = '/contact' element={<Contact />} />
      <Route path = '/product/:productId' element={<ProductDetails />} />
      <Route path = '/cart' element={<Cart />} />
      <Route path = '/login' element={<Login />} />
      <Route path = '/placeorder' element={<PlaceOrder/>}/>
      <Route path = '/orders' element={<Orders/>}/>
      </Routes> 
    </div>
  )
}

export default App
