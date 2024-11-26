import React from 'react';
import mainIMG from '../assets/Banner-Top-san-pham-yeu-thich-PC.jpg'

export default function HomePage() {
  return (
    <div className='home-container' style={{marginTop: '30px'}}>
      <div className='img-main'>
        <img style={{width: '100%'}} src={mainIMG} alt="" />
      </div>
    </div>
  )
}
