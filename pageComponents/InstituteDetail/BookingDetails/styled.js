import styled from 'styled-components';

import { device } from "../../../UiComponents/device";

export const BookingSection = styled.div`
	background: #ffffff;
  box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.17);
  margin-top: 50px;
  .head{
    text-align: center;
    padding: 25px 40px;
    font-family: ${(props) => props.theme.headFont};
    font-size: 22px;
    color: #000000;
    text-transform: uppercase;
    font-weight: 800;
    margin-bottom: 30px;
    background: #F0F9FF;
  }
  .form-wrap{
    padding: 0px 40px;
    .ant-form-item{
      margin: 0;
      input, .ant-picker{
        border-radius: 22px;
        width: 100%;
      }
    }
  }
  .inquiry-list{
    margin-top: 30px;
    padding: 0px 40px;
    .head-title{
      font-family: ${(props) => props.theme.headFont};
      font-size: 16px;
      color: #2A2A2A;
      font-weight: 600;
      text-align: center;
      margin-bottom: 20px;
    }
    .class-list-wrap{
      > div{
        &:last-child{
          border-bottom: 2px solid #CBCBCB;
          padding-bottom: 40px;
        }
      }
    }
  }
  @media ${device.tabletL}{
  }
`;

export const BookingInfo = styled.div`
  margin: 40px 0 60px;
  padding: 0px 40px 50px;
	.info-wrap{
    margin-bottom: 35px;
    .detail{
      display: flex;
      justify-content: space-between;
      padding-bottom: 15px;
      font-family: ${(props) => props.theme.contentFont};
      font-size: 14px;
      color: #7D7D7D;
      font-weight: 400;
      .number{
        color: #000000;
        font-weight: 600;
      }
      &.minus{
        .number{
          color: ${(props) => props.theme.primaryColor};
        }
      }
      &:last-child{
        padding-top: 20px;
        padding-bottom: 0;
        border-top: 1px solid #d4d4d4;
        .number{
          color: ${(props) => props.theme.primaryColor};
        }
      }
    }
  }
  @media ${device.tabletL}{
  }
`;

export const ContactWrap = styled.div`
  margin: 0 -10px;
	.contact-info{
    display: flex;
    align-items: flex-start;
    .icon-wrap{
      margin-right: 10px;
      .anticon{
        color: #363636;
        font-size: 18px;
      }
    }
    .text-detail{
      font-family: ${(props) => props.theme.contentFont};
      font-size: 12px;
      color: #7D7D7D;
      font-weight: 500;
      span{
        font-size: 10px;
        font-weight: 600;
        display: block;
        color: ${(props) => props.theme.primaryColor};
      }
    }
  }
`;

export const BookingClassList = styled.div`
  display: flex;
  padding-bottom: 20px;
  > div{
    &:first-child{
      width: 68px;
      height: 64px;
      margin-right: 20px;
    }
  }
  .class-title{
    font-family: ${(props) => props.theme.contentFont};
    font-size: 14px;
    color: #252525;
    font-weight: 700;
    .icon-wrap{
      margin-top: 10px;
      background: ${(props) => props.theme.primaryColor};
      border-radius: 50%;
      width: 14px;
      height: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s linear;
      img{
        filter: brightness(0) invert(1);
      }
    }
  }
`;