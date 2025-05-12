import React from 'react'
import UserNav from './UserNav'
import ProductList from './ProductList'
import Footer from '../Footer'
import Carousel from './Carousel'

function UserHome() {
  return (
    <div className='bg-white'>
      <UserNav/>
      <Carousel/>
      <ProductList/>
      <Footer/>
    </div>
  )
}

export default UserHome
