import React from 'react'
import { ProductsList } from '../components/ProductsList'


export const Home  = ({products}) => {
  // console.log(products);
  return (
    <div className='product'>
      {
        products && products.map((product) => {
          return(
            <ProductsList key={product._id}
            id = {product._id}
            image = {product.image}
            name = {product.name}
            rating = {product.rating}
            desc = {product.desc}

             />
          )
        })
      }

    </div>
  )
}
