import React from 'react'

import { LoginPageSection } from "./styled";
import ImageSignup from './ImageSignup';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <LoginPageSection>
      <ImageSignup />
      <LoginForm />
    </LoginPageSection>
  )
}

export default LoginPage
