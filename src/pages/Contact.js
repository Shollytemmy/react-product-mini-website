import React from 'react'

export const Contact  = () => {
  return (
    <div className='form'>
      <form action="">
        <div className='form__input'>
          <label htmlFor="name">Name</label>
          <input type="text" />
        </div>

         <div className='form__input'>
          <label htmlFor="email">Email</label>
          <input type="email" />
        </div>

         <div className='form__input'>
          <label htmlFor="number">Phone Number</label>
          <input type="number" />
        </div>

         <div >
          
          <button>Contact us</button>
        </div>
      </form>
    </div>
  )
}
