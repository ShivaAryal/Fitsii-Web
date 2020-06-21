import React from 'react'

import { CustomButton } from "../../UiComponents/Buttons";
import { ImageSignupSection } from './styled';

import Trainee from "../../public/images/trainee.png";

const styling = {
  background: `url(${Trainee}) no-repeat 100% center`,
  backgroundSize: '100% cover'
}

const ImageSignup = () => {
  return (
    <ImageSignupSection style={styling}>
      <div className="slogan">
        Best Place For <span>FITNESS, WELLNESS</span>
      </div>
      <div className="login-wrap">
        <div className="text-info">
          Create An Account
          </div>
        <div className="button-wrap">
          <CustomButton bgColor="#ffffff" textColor="#0081FF" borderColor="#ffffff" fw="700" mg="0" pd="8px 40px">
            Sign Up
          </CustomButton>
        </div>
      </div>
    </ImageSignupSection>
  )
}

export default ImageSignup
