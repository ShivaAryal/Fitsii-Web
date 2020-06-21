import styled from 'styled-components';

import { device } from "../../../UiComponents/device";

export const OverviewSection = styled.div`
	position: relative;
  z-index: 1;
  margin: 30px 0 30px;
  margin-top: 0;
  .head-wrap{
    margin-bottom: 50px;
    text-align: center;
    .rating{
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
    .overview-head{
      margin-bottom: 15px;
      .section-title{
        font-family: ${(props) => props.theme.headFont};
        font-size: 18px;
        color: #000000;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 0;
      }
      .rating{
        display: none;
      }
    }
    .overview-description{
      font-family: ${(props) => props.theme.contentFont};
      font-size: 12px;
      color: #363636;
      font-weight: 600;
      .location{
        margin-bottom: 5px;
        .anticon{
          color: grey;
          font-size: 14px;
          margin-right: 10px;
        }
      }
    }
  }
  .overview-detail{
    text-align: center;
    .section-title{
      font-family: ${(props) => props.theme.headFont};
      font-size: 16px;
      color: #424242;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .section-subtitle{
      font-family: ${(props) => props.theme.headFont};
      font-size: 16px;
      color: #424242;
      font-weight: 700;
      margin: 20px 0 15px;
    }
    .description{
      font-family: ${(props) => props.theme.contentFont};
      font-size: 13px;
      line-height: 21px;
      color: #3E3E3E;
      font-weight: 500;
      margin-bottom: 15px;
    }
    .slider-list{
      margin: 40px 0 40px;
      .slick-list{
        padding-bottom: 0;
      }
      .slick-prev, .slick-next{
        bottom: initial;
        top: 50%;
        z-index: 1;
        tansform: translate3d(0,-50%,0);
        &::before{
          filter: brightness(0) invert(1);
        }
      }
      .slick-prev{
        left: 10px;
      }
      .slick-next{
        right: 10px;
      }
    }
  }
  @media ${device.tabletL}{
    .head-wrap{
      text-align: left;
      .overview-head{
        display: flex;
        align-items: flex-end;
        .section-title{
          font-size: 26px;
        }
        .rating{
          display: block;
          padding-left: 20px;
          padding-bottom: 3px;
        }
      }
      .overview-description{
        display: flex;
        align-items: center;
        .location{
          margin: 0 40px 0 0;
        }
        .rating{
          display: none;
        }
      }
    }
    .overview-detail{
      text-align: left;
    }
  }
`;