import React from 'react'
import Bride from '../assets/images/bride.jpg'
import Groom from '../assets/images/groom.jpg'
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
                  <span>Cô Dâu</span>
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
                  <span>Chú Rễ</span>
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
              13 tháng 1 năm 2024 — Tư gia - Tổ 2, ấp Cẩm Sơn, xã Xuân Mỹ, huyện Cẩm Mỹ, tỉnh Đồng Nai
            </h4>
            <h3 className='oliven-couple-title'>Tân Hôn</h3>
            <h4 className='oliven-couple-subtitle'>
              14 tháng 1 năm 2024 — Nhà Hàng Tiệc Cưới Ngọc Trâm - 948 Nguyễn Văn Quá, Đông Hưng Thuận, Quận 12, Thành phố Hồ Chí Minh
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bridegroom
