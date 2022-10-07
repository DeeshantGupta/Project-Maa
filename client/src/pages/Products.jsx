import React from 'react'
import ProductCard from '../components/jsx/ProductCard'

const Products = () => {
  return (
    <div className='productsection'>
      <h1>Baby Products</h1>
      <div className='products_section_productsection'>
        <ProductCard />
        {/* <ProductCard /> */}
      </div>
    </div>
  )
}

export default Products
