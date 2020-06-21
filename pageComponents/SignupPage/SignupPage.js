import React from 'react'

import { SignupPageSection } from "./styled";
import ImageLogin from './ImageLogin';
import SignupForm from './SignupForm';

const SignupPage = () => {
  return (
    <SignupPageSection>
      <ImageLogin />
      <SignupForm />
    </SignupPageSection>
  )
}

export default SignupPage
