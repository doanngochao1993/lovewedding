import React from 'react'

function Header () {

  return (
    <header
      id='home'
      className='header valign bg-img parallaxie'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center caption'  style={{transform: 'translateY(80%)'}}>
            <h2 className='animate-box' data-animate-effect='fadeInUp' style={{fontFamily: 'Alex Brush', fontWeight:400,margin:'0 0 15px 0',color:'#fff'}}>
              Ngọc Hảo & Ngọc Quý
            </h2>
            <h5 className='animate-box' data-animate-effect='fadeInUp'>
              14 January, 2024 – Hồ Chí Minh
            </h5>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='arrow bounce text-center'>
              <a href='#couple'>
                {' '}
                <i className='ti-heart'></i>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
