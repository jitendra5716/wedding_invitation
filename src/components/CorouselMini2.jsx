import React from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const blessings = [
  {
    text: 'May your life together be filled with love, joy, and harmony.',
    name: '— Amit & Komal',
  },
  {
    text: 'Wishing you both a lifetime of laughter, adventure, and beautiful memories.',
    name: '— Ajith',
  },
  {
    text: 'May your hearts always beat as one and your home be full of blessings.',
    name: '— Yazhini',
  },
  {
    text: 'May this union bring you strength in hard times and celebration in every success.',
    name: '— Rohit',
  },
  {
    text: 'May the years ahead be blessed with happiness, health, and endless love.',
    name: '— Amit',
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    type="button"
    className="blessing-carousel__arrow blessing-carousel__arrow--prev"
    onClick={onClick}
  >
    <LeftOutlined />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    type="button"
    className="blessing-carousel__arrow blessing-carousel__arrow--next"
    onClick={onClick}
  >
    <RightOutlined />
  </button>
);

const CorouselMini2 = () => (
  <div className="blessing-carousel">
    <Carousel
      arrows
      infinite
      dots={false}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay
      autoplaySpeed={6000}
      prevArrow={<CustomPrevArrow />}
      nextArrow={<CustomNextArrow />}
    >
      {blessings.map((item, index) => (
        <div key={`blessing-${index}`}>
          <div className="blessing-carousel__card">
            <p className="blessing-carousel__text">{item.text}</p>
            <p className="blessing-carousel__author">{item.name}</p>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default CorouselMini2;
