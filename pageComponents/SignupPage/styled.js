import styled from 'styled-components';

import { device } from "../../UiComponents/device";

export const SignupPageSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 80%;
  padding: 40px;
  margin: 40px auto;
  box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.17);
  @media ${device.tabletS}{
    max-width: 350px;
  }

  @media ${device.tablet}{
    max-width: 960px;
    flex-direction: row;
    padding: 0;
  }
`;

export const ImageLoginSection = styled.div`
  display: none;
  @media ${device.tablet}{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    position: relative;
    padding: 45px 25px;
    &::before{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: rgba(0, 144, 255, 0.71);
    }
    .slogan{
      font-family: ${(props) => props.theme.headFont};
      color: #ffffff;
      font-size: 26px;
      font-weight: 800;
      position: relative;
      span{
        display: block;
      }
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

export const SignupFormSection = styled.div`
	h2,p{
    text-align: center;
  }
  > div{
    &:first-child{
      margin-bottom: 35px;
      &::before{
        width: 60px;
        left: 50%;
        transform: translate3d(-50%,0,0);
      }
    }
  }
  .form-content{
    input{
      text-align: center;
    }
  }
  .alter-signup{
    margin-top: 30px;
    .text-info{
      font-family: ${(props) => props.theme.headFont};
      color: ${(props) => props.theme.primaryColor};
      font-size: 12px;
      font-weight: 500;
      font-style: italic;
      text-align: center;
      margin-bottom: 20px;
    }
    .button-wrap{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .custom-button{
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 25px;
        font-family: ${(props) => props.theme.headFont};
        color: #000000;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
        min-width: 150px;
        box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2);
        .icon-wrap{
          margin-right: 10px;
          img{
            width: 18px;
          }
        }
        &:first-child{
          margin-bottom: 20px;
        }
      }
    }
  }
  @media ${device.tablet}{
    width: 40%;
    padding: 30px 20px;
    h2,p{
    text-align: left;
    }
    > div{
      &:first-child{
        &::before{
          width: 40px;
          left: 0;
          transform: translate3d(0,0,0);
        }
      }
    }
    .form-content{
      .ant-form-item{
        margin-bottom: 15px;
      }
      input{
        text-align: left;
      }
    }
  }
  @media ${device.tabletL}{
    padding: 30px;
  }
  @media ${device.laptop}{
    .alter-signup{
      .button-wrap{
        .custom-button{
        &:first-child{
          margin-bottom: 0px;
          margin-right: 10px;
        }
      }
      }
    }
  }
`;