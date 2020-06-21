import React from 'react'

import Slider from 'react-slick'
import { GallerySection } from './styled'
import { SliderStyle } from "../../../UiComponents/Layout";
import { ImgWrap } from "../../../components/Layout";

import Gallery1 from "../../../public/images/amenities1.png";
import Gallery2 from "../../../public/images/amenities2.png";

import Certificate1 from "../../../public/images/certificate1.png";
import Certificate2 from "../../../public/images/certificate2.png";

const Gallery = () => {
  let settings = {
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div id="gallery-id">
      <GallerySection>
        <div className="gallery-wrap">
          <div className="head-wrap">
            Gallery
          </div>
          <div className="slider-list">
            <SliderStyle className="detail-page">
              <Slider {...settings}>
                <ImgWrap src={Gallery1} maxHeight="320px" alt='Gym' />
                <ImgWrap src={Gallery2} maxHeight="320px" alt='Gym' />
                <ImgWrap src={Gallery1} maxHeight="320px" alt='Gym' />
                <ImgWrap src={Gallery2} maxHeight="320px" alt='Gym' />
              </Slider>
            </SliderStyle>
          </div>
        </div>
        <div className="certificate-wrap">
          <div className="head-wrap">
            Certificates
          </div>
          <div className="slider-list">
            <SliderStyle className="detail-page">
              <Slider {...settings}>
                <ImgWrap src={Certificate1} maxHeight="320px" alt='Certificate' />
                <ImgWrap src={Certificate2} maxHeight="320px" alt='Certificate' />
                <ImgWrap src={Certificate1} maxHeight="320px" alt='Certificate' />
                <ImgWrap src={Certificate2} maxHeight="320px" alt='Certificate' />
              </Slider>
            </SliderStyle>
          </div>
        </div>
      </GallerySection>
    </div>
  )
}

export default Gallery
