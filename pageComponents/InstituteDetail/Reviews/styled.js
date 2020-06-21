import styled from 'styled-components';

import { device } from "../../../UiComponents/device";

export const ReviewsSection = styled.div`
	position: relative;
  z-index: 1;
  margin: 30px 0 30px;
  .head-wrap{
    margin-bottom: 40px;
    text-align: center;
    font-family: ${(props) => props.theme.headFont};
    font-size: 18px;
    color: #000000;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 30px;
  }
  @media ${device.tabletL}{
    .head-wrap{
      text-align: left;
    }
  }
`;

export const ReviewCardWrap = styled.div`
	position: relative;
  z-index: 1;
  margin-bottom: 60px;
  .img-wrap{
    width: 65px;
    height: 65px;
    margin: 0 auto 20px auto;
    border-radius: 50%;
    box-shadow: 0px 3px 5px 1px rgba(23, 23, 22, 0.5);
    img{
      border-radius: 50%;
      overflow: hidden;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .comment-user-info{
    text-align: center;
    color: #151515;
    font-family: ${(props) => props.theme.contentFont};
    .basic-detail{
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
    .time-detail{
      font-size: 14px;
      letter-spacing: 2.4px;
      font-weight: 500;
    }
    .user-name{
      font-size: 14px;
      font-weight: 600;
      margin: 5px 0 8px;
    }
    .rating{
      font-size: 12px;
      .ant-rate{
        margin-right: 8px;
      }
      .ant-rate-star{
        margin-right: 5px;
        .anticon{
          color: ${(props) => props.theme.primaryColor};
          font-size: 12px;
          margin:
        }
        &.ant-rate-star-zero{
          .anticon{
            color: #c3c3c3;
          }
        }
      }
    }
    .description{
      font-weight: 500;
      font-size: 13px;
    }
    .button-wrap{
      margin-top: 25px;
      display: flex;
      justify-content: center;
      > div{
        margin: 0 10px 0 0;
        background: #ffffff;
        border: 1px solid rgba(30, 30, 39, 0.2);
        color: #151515;
        &:last-child{
          margin: 0;
          background: ${(props) => props.theme.primaryColor};=;
          border: 1px solid ${(props) => props.theme.primaryColor};;
          color: #fff;
        }
      }
    }
  }
  @media ${device.tabletL}{
    padding-left: 125px;
    .img-wrap{
      position: absolute;
      left: 0;
      top: 0;
    }
    .comment-user-info{
      text-align: left;
      .basic-detail{
        flex-direction: row;
        align-items: flex-start;
      }
      .button-wrap{
        justify-content: flex-start;
      }
    }
  }
`;