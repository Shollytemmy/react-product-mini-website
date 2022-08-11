import React from 'react'
import { useParams } from 'react-router-dom'

export const SingleProducts = ({products}) => {
    // const {image, desc, rating, amount, name} = products
   
    // console.log(products)
    const {prodID} = useParams()
     const getProduct_Index = products[prodID - 1]
     const {image, desc, rating, amount, name} = getProduct_Index 
    //  console.log(hold)
  return (
    <div className='single__product'>
        <div className="product__img">
            <img src={image} alt={name} />
        </div>
    </div>
  )
}
