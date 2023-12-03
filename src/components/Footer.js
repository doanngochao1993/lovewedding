import React from 'react'
import Logo from '../assets/images/logo.png'
import vcb from '../assets/images/VCB.jpg'
import acb from '../assets/images/acb.png'
import 'reactjs-popup/dist/index.css';

const customStyles = {
  content: {
    width: '400px', // Chỉnh kích thước chiều rộng
    height: '800px', // Chỉnh kích thước chiều cao
    margin: 'auto', // Căn giữa theo chiều ngang
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};




function Footer() {
  // const [QrShow, setQrShow] = useState(false)
  // const handleTextClick = () => {
  //   setQrShow(true);
  // };

  // const closePopup = () => {
  //   setQrShow(false);
  // };

  // const Popup = ({ isOpen, onClose }) => {
  //   const handleOverlayClick = () => {
  //     onClose();
  //   };
  //   return (
  //     <Modal
  //       style={customStyles}
  //       isOpen={isOpen}
  //       onRequestClose={onClose}
  //       contentLabel="Popup"
  //       overlayClassName="popup-overlay"
  //     >
  //       <div className="popup-content" onClick={handleOverlayClick}>

  //       </div>
  //     </Modal>
  //   );
  // };

  return (
    <div className='footer2'>
      <div className='oliven-narrow-content'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>
              <a>
                <img src={Logo} alt='' />
                {/* <div onClick={handleTextClick}> */}
                <span >
                  Ngọc Hảo <small>&</small> Ngọc Qúy
                </span>
                {/* <Popup isOpen={QrShow} onClose={closePopup} /> */}
                {/* </div> */}
              </a>
            </h2>
            <p className='copyright'>January 14, 2024 – Hóc Môn, Hồ Chí Minh</p>
            <div>
              <div className='row'>
                <h1><span className='section-head col-md-12 text-center'>HỘP MỪNG CƯỚI</span></h1>
                <div className='col-md-6 text-center' >
                  <img src={vcb} style={{height:'200px',width:'200px'}}></img>
                  <h4>Ngân hàng: VCB</h4>     
                  <h4>Số tài khoản: 0501000116099</h4>
                  <h4>Tên tài khoản: Đoàn Ngọc Hảo</h4>
                  <h4>Số điện thoại/Momo: 0908321107</h4>   
                </div>
                <div className='col-md-6 text-center'>
                  <img src={acb} style={{height:'200px',width:'200px'}}></img>
                  <h4>Ngân hàng: ACB</h4>     
                  <h4>Số tài khoản: 248279689</h4>
                  <h4>Tên tài khoản: Nguyễn Thị Ngọc Quý</h4>
                  <h4>Số điện thoại/Momo: 0962910182</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Footer
