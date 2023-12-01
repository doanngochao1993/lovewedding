import React from 'react'
import Logo from '../assets/images/logo.png'
import vcb from '../assets/images/VCB.jpg'
import momo from '../assets/images/Momo.jpg'
import { useState } from "react";
import Modal from 'react-modal';
import Popup from 'reactjs-popup';
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
              <Popup trigger=
                {<button>Open QR code </button>}  position="center"
              >
                
                <div>
                  <img src={momo} alt='' />
                  <div><p>0908321107 Doan Ngoc Hao</p></div>
                  <img src={vcb} alt='' />
                  <div><p>0501000116099 VCB-Doan Ngoc Hao</p></div>
                </div>
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Footer
