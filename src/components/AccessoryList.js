import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'




export const AccessoryList = ({accessory}) => {
    const [seemore ,updateMore] = useState(false)
    const {brand, screen_size, color, hdd, cpu, card, special, series, os} = accessory
    const navigate = useNavigate()
  return (
    <table>
        <tbody>
             <tr><td>Brand </td>  <td> {brand}</td></tr>
        <tr><td>color</td> <td> {color}</td></tr>
        <tr><td>screen Size </td> <td>{screen_size}</td></tr>
        <tr><td>series </td> <td> {series}</td></tr>
        <tr><td>HDD</td> <td>{hdd}</td></tr>
        <tr><td>cpu</td><td>{cpu}</td></tr>
        <tr><td>operating system</td><td>{os}</td></tr>
        <tr><td>special</td><td>{special}</td></tr>
        <tr><td>card</td><td>{card}</td></tr>

        </tbody>
        <button onClick={() => navigate(-1) }>Go back</button>
       
    </table>
  )
}
