import React from 'react'

import { CustomButton } from "../../UiComponents/Buttons";
import { ImageLoginSection } from './styled';

import Trainee from "../../public/images/trainee.png";

const styling = {
  background: `url(${Trainee}) no-repeat 100% center`,
  backgroundSize: '100% cover'
}

const ImageLogin = () => {
  return (
    <ImageLoginSection style={styling}>
      <div className="slogan">
        Best Place For <span>FITNESS, WELLNESS</span>
      </div>
      <div className="login-wrap">
        <div className="text-info">
          Already Have An Account?
          </div>
        <div className="button-wrap">
          <CustomButton bgColor="#ffffff" textColor="#0081FF" borderColor="#ffffff" fw="700" mg="0" pd="8px 40px">
            Login
          </CustomButton>
        </div>
      </div>
    </ImageLoginSection>
  )
}

export default ImageLogin
