import React, { useState } from 'react'
import { BannerWrap } from './styled'
import HeroBannerImage from "../../public/images/herobanner.png";
import { ImgWrap } from '../Layout';

const HeroBanner = (props) => {
  const [stateBanner, setStateBanner] = useState(HeroBannerImage);

  return (
    <BannerWrap>
      <ImgWrap src={stateBanner} height="calc(100vh - 99px)" alt='banner' herobannerimage="banner" />
      <div className="text-detail">
        {props.title ?
          <h1 className="hero-title">
            <span className="heavy" style={{ display: 'block' }}>{props.title}</span>
          </h1>
          :
          <h1 className="hero-title">
            <span className="heavy" style={{ display: 'block' }}>DISCOVER THE</span> POWER OF <span className="heavy">TRAINNING</span>
          </h1>
        }
        <p className="caption">
          {
            props.caption ?
              props.caption :
              "Get more from every workout with customized guideance of personal training"
          }
        </p>
      </div>
    </BannerWrap>
  )
}

export default HeroBanner
