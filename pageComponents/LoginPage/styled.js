import styled from 'styled-components';
import { SignupPageSection, SignupFormSection, ImageLoginSection } from "../SignupPage/styled";
import { device } from "../../UiComponents/device";

export const LoginPageSection = styled(SignupPageSection)`
  @media ${device.tablet}{
    flex-direction: row-reverse;
  }
`;

export const ImageSignupSection = styled(ImageLoginSection)`
  @media ${device.tablet}{
    align-items: flex-end;
    .slogan{
      text-align: right;
    }
    .login-wrap{
      position: relative;
      .text-info{
        font-family: ${(props) => props.theme.headFont};
        color: #ffffff;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 15px;
      }
      .button-wrap{
        display: flex;
        justify-content: flex-start;
      }
    }
  }
`;

export const LoginFormSection = styled(SignupFormSection)`
`;