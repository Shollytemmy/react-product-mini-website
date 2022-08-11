import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const ProductsList = ({id, image, name, rating,desc}) => {
  const [more, updateMore] = useState(true)
  const navigate = useNavigate()
  return (
    <div className='product__item' onClick={() => navigate(`/singleProduct/${id}`)}>
      <img src={image && image} alt={name} />
      <div className="item___details">
        <span>{more ? desc.slice(0,80): desc}</span>
        <span onClick={() => updateMore(!more)}>
          {more && <span>...</span>}
        </span>
      </div>

    </div>
  )
}
