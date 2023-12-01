import React from 'react'
import where1 from '../assets/images/where-1.jpg'
import where2 from '../assets/images/where-2.jpg'
import where3 from '../assets/images/where-3.jpg'
import where4 from '../assets/images/where-4.jpg'
function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>The Bride's family</span>
            <h2 className='oliven-title'>When & Where</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-6'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where1} alt='' />
            </div>
            <div className='content'>
              <h5>Wedding Ceremony</h5>
              <p>
                <i className='ti-location-pin'></i> Tư Gia - Tổ 2, ấp Cẩm Sơn, xã Xuân Mỹ, huyện Cẩm Mỹ, tỉnh Đồng Nai
              </p>
              <p>
                <i className='ti-time'></i> <span>9:30am </span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-6'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='content'>
              <h5>Weddding Party</h5>
              <p>
                <i className='ti-location-pin'></i> Tư Gia - Tổ 2, ấp Cẩm Sơn, xã Xuân Mỹ, huyện Cẩm Mỹ, tỉnh Đồng Nai
              </p>
              <p>
                <i className='ti-time'></i> <span>11:00am</span>
              </p>
            </div>
          </div>
          
        </div>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>The Groom's family</span>
            <h2 className='oliven-title'>When & Where</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-6'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where3} alt='' />
            </div>
            <div className='content'>
              <h5>Wedding Ceremony</h5>
              <p>
                <i className='ti-location-pin'></i> Tư Gia - 140/21B ấp 3, Đông Thạnh, Hóc Môn, Hồ Chí Minh, Việt Nam
              </p>
              <p>
                <i className='ti-time'></i> <span>9:30am </span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-6'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where4} alt='' />
            </div>
            <div className='content'>
              <h5>Weddding Party</h5>
              <p>
                <i className='ti-location-pin'></i> Nhà Hàng Tiệc Cưới Ngọc Trâm - 948 Nguyễn Văn Quá, Q.12, Tp.HCM
              </p>
              <p>
                <i className='ti-time'></i> <span>11:00am</span>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Where
