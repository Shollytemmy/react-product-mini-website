import React from 'react'

export const Contact  = () => {
  return (
    <>
    <div className='form'>
      <form action="https://formspree.io/f/mbjbjnjg" method='POST'>
        <div className='form__input'>
          <label htmlFor="name">Your Name</label>
          <input type="text" name='name' />
        </div>

         <div className='form__input'>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' />
        </div>

         <div className='form__input'>
          <label htmlFor="number">Phone Number</label>
          <input type="number" name='number' />
        </div>

        <div className='form__input'>
          <label htmlFor="number">Your Message</label>
          <input type="text" name='message' />
        </div>
          
          <button>Contact us</button>
        
      </form>
    </div>


     <section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.655982200948!2d4.492716913972479!3d8.435403300327511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037ac960d1078a7%3A0x8f4b361055412907!2sIlorin%20International%20Airport!5e0!3m2!1sen!2sng!4v1660960213051!5m2!1sen!2sng" title='Airport' width="900" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

    </>

    
  )
}
