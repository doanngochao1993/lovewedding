import React from 'react'
import Bride from '../assets/images/bride.jpg'
import Groom from '../assets/images/groom.JPG'
function Bridegroom () {
  return (
    <div id='couple' className='bridegroom clear section-padding bg-pink'>
      <div className='container'>
        <div className='row mb-60'>
          <div className='col-md-6'>
            <div
              className='item toright mb-30 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='img'>
                {' '}
                <img src={Bride} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Nguyễn Thị Ngọc Quý<i className='ti-heart'></i>
                  </h6>{' '}
                  <span>The Bride</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className='item mb-30 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='img'>
                {' '}
                <img src={Groom} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Đoàn Ngọc Hảo <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>The Groom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-md-12 text-center animate-box'
            data-animate-effect='fadeInUp'
          >
            <h3 className='oliven-couple-title'>Vu Quy</h3>
            <h4 className='oliven-couple-subtitle'>
              January 13 - 9:30am ,2024 — Tổ 2, ấp Cẩm Sơn, xã Xuân Mỹ, huyện Cẩm Mỹ, tỉnh Đồng Nai
            </h4>
            <h3 className='oliven-couple-title'>Tân Hôn</h3>
            <h4 className='oliven-couple-subtitle'>
              January 14 - 9:30am ,2024 — Nhà Hàng Tiệc Cưới Ngọc Trâm - 948 Nguyễn Văn Quá, phường Đông Hưng Thuận, Q.12, Tp.HCM
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bridegroom
