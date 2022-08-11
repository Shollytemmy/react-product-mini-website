import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const ProductsList = ({id, image, name, rating}) => {
  const navigate = useNavigate()
  return (
    <div className='product__item' onClick={() => navigate('/products')}>
      <img src={image && image} alt={name} />
      <div className="item___details">
        <strong><p>{name} {rating}</p></strong>
      </div>

    </div>
  )
}
