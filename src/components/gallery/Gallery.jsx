import React from 'react'
import './gallery.css'

function Gallery({ src, text }) {

  const textOne = "I love making cool things and <br/> solving complex problems for <br/> people — like you."
  const textTwo = "I deliver impactful results  <br/> through strategic thinking and <br/> data-driven insights."

  return (
    <>
      <div>
        <img src={src} className='image' />
        <h3 className='text' dangerouslySetInnerHTML={{__html: text}}></h3>
      </div>
    </>
  )
}

export default Gallery