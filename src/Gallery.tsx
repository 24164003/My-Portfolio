import React, { useState } from 'react'
``

const Gallery = () => {

  const prevSymbol = "<";
  const nextSymbol = ">";

  const [currentImage, setCurrentImage] = useState('gallery-section-image-1');

  const switchPhotos = () => {
    if (currentImage === 'gallery-section-image-1') {
      setCurrentImage('gallery-section-image-3');
    }
    else if (currentImage === 'gallery-section-image-2') {
      setCurrentImage('gallery-section-image-1');
    }
    else if (currentImage === 'gallery-section-image-3') {
      setCurrentImage('gallery-section-image-2');
    }
  };

  return (
    <div className='gallery-section-parent'>
      <div className="gallery-section-image-parent" style={{ background: 'white', display: 'flex' }}>
        <div className='gallery-section-nav'
          onClick={() => switchPhotos()}
        >{prevSymbol}</div>
        <div style={{ width: '90%' }} className={currentImage}>
        </div>
        <div className='gallery-section-nav'
          onClick={() => switchPhotos()}
        >{nextSymbol}</div>
      </div>
    </div>
  )
}

export default Gallery