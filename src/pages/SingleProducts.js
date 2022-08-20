import React from 'react'
import { useParams } from 'react-router-dom'
import { AccessoryList } from '../components/AccessoryList'

export const SingleProducts = ({products}) => {
    // const {image, desc, rating, amount, name} = products
   
    // console.log(products)
    const {prodID} = useParams()
     const getProduct_Id = products[prodID - 1]
     const {image, desc, rating, amount, name, brand, reviews, disc, currency, list_price, accessories} = getProduct_Id 
    //  console.log(accessories)

     const getAccessories = accessories && accessories.map((accessory) => accessory)
     console.log(getAccessories)
    //  console.log(hold)
  return (
    <>
    <div className='single__product'>
        <div className="product__img">
            <img src={image} alt={name} />
        </div>
        <div className="product__right">
            <div className="desc">
                <p className='desc__text'>
                    {desc}
                </p>
            </div>
            <div className="items__desc">
                    <p><span className='desc__brand'>{brand && <>Brand {brand}</>} </span></p>
                    <p className='desc__para'>
                        <span className='desc__ratings'>{rating} ratings | </span>
                         <span>{reviews} answered Questions </span> 
                         </p>
                    <p className='desc__amount' >
                        <span>{disc}</span> 
                         <span className='amount__cur'>  <sup  className='amount__cur'>{currency}</sup>{amount}</span>
                         </p>
                    <p> Listing Price:<span className='desc__price'> {list_price}</span></p>
                </div>

                 <div className="accessories__list">
            {
                accessories && accessories.map((accessory) =>{
                    return(
                        <AccessoryList accessory={accessory} />
                        
                    )
                })
            }
        </div>
        </div>
        
       
    </div>
    {/* <button>Go back</button> */}
    </>
    )
}
