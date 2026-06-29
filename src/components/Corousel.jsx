import React from 'react';
import { Carousel } from 'antd';
import img1 from '../assets/img/img15.jpg';
import img2 from '../assets/img/img10.jpg';
// import img3 from '../assets/img/img09.jpg';
import img4 from '../assets/img/img07.jpg';
import img5 from '../assets/img/img13.jpg';
import img6 from '../assets/img/img11.jpg';
import img7 from '../assets/img/img08.jpg';
import img8 from '../assets/img/img12.jpg';
import img9 from '../assets/img/img05.jpeg';
import NavbarExample from './Navbar';
import GaneshaImg from '../assets/img/ganesha_img.png';

const images = [img1, img2, img4, img5, img6, img7, img8, img9];

const Corousel = () => (
  <section id="home" className="header-carousel">
    <div className="header-carousel__navbar">
      <NavbarExample />
    </div>
    <Carousel autoplay autoplaySpeed={2000}>
      {images.map((src, index) => (
        <div key={src}>
          <div className="header-carousel__slide">
            <img className="header-carousel__image" src={src} alt={`slide ${index + 1}`} />
            <div className="header-carousel__overlay header-carousel__overlay--top">
              <div className="header-carousel__symbol">
                <img src={GaneshaImg} alt="Ganesha" />
              </div>
              <h3 className="header-carousel__shloka">|| श्री गणेशाय नमः ||</h3>
            </div>
            <div className="header-carousel__overlay header-carousel__overlay--bottom">
              <h3 className="header-carousel__invite-text">You are invited to the wedding of</h3>
              <h1 className="playwrite-gb-j header-carousel__couple-name">Jitendra & Babli</h1>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </section>
);

export default Corousel;