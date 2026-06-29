

import React from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const galleryImages = Object.values(
  import.meta.glob('../assets/mates/*', {
    eager: true,
    import: 'default',
  })
);

const arrowButtonStyle = (side) => ({
  position: 'absolute',
  top: '50%',
  [side]: '8px',
  transform: 'translateY(-50%)',
  zIndex: 2,
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: 'none',
  background: '#fff',
  color: '#8b5a3c',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

const CustomPrevArrow = ({ onClick }) => (
  <button type="button" className="mates-carousel__arrow mates-carousel__arrow--prev" onClick={onClick}>
    <LeftOutlined />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button type="button" className="mates-carousel__arrow mates-carousel__arrow--next" onClick={onClick}>
    <RightOutlined />
  </button>
);

const CorouselMini = () => (
  <div className="mates-carousel">
    <Carousel
      arrows
      infinite={false}
      dots={false}
      slidesToShow={5}
      slidesToScroll={1}
      prevArrow={<CustomPrevArrow />}
      nextArrow={<CustomNextArrow />}
      responsive={[
        {
          breakpoint: 1200,
          settings: { slidesToShow: 4, slidesToScroll: 1 },
        },
        {
          breakpoint: 992,
          settings: { slidesToShow: 3, slidesToScroll: 1 },
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2, slidesToScroll: 1 },
        },
        {
          breakpoint: 576,
          settings: { slidesToShow: 1, slidesToScroll: 1 },
        },
      ]}
    >
      {galleryImages.map((src, index) => (
        <div key={`${src}-${index}`} className="mates-carousel__slide">
          <div className="mates-carousel__card">
            <img src={src} alt={`gallery-${index + 1}`} className="mates-carousel__image" />
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default CorouselMini;