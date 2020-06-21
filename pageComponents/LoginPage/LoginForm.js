import React from 'react'

import { Form, Input, Button, Checkbox } from 'antd'
import { LoginFormSection } from './styled';
import { MoreButton } from '../../UiComponents/Buttons';
import { Heading, SectionSubtext, SectionTitle } from '../../UiComponents/Layout';
import Fb from "../../public/icons/facebook.png";
import Google from "../../public/icons/google.png";

const LoginForm = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <LoginFormSection>
      <Heading>
        <SectionSubtext size="14px">
          Fitsii
        </SectionSubtext>
        <SectionTitle size="24px">
          Login
        </SectionTitle>
      </Heading>
      <div className="form-content">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <MoreButton htmlType="submit" mg="15px auto 0 auto" pd="10px 50px">
              Login
            </MoreButton>
          </Form.Item>
        </Form>
      </div>
      <div className="alter-signup">
        <div className="text-info">
          Or Login With
        </div>
        <div className="button-wrap">
          <div className="custom-button">
            <div className="icon-wrap">
              <img src={Fb} alt="facebook" />
            </div>
            Facebook
          </div>
          <div className="custom-button">
            <div className="icon-wrap">
              <img src={Google} alt="google" />
            </div>
            Google
          </div>
        </div>
      </div>
    </LoginFormSection>
  )
}

export default LoginForm
