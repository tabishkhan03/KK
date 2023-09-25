import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import SingleProduct from '../Pages/SingleProduct/SingleProduct'
import Error from '../Pages/Error/Error'
import Search from '../Pages/Search/Search'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='*' element={<Error/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/search' element={<Search/>} />
            <Route path='/product/:id' element={<SingleProduct/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes