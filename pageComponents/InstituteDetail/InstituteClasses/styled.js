import styled from 'styled-components';

import { device } from "../../../UiComponents/device";

import { InstructorWrap } from "../../../components/Instructor/styled";

export const InstituteClassWrap = styled.div`
  .head-wrap{
    text-align: center;
    font-family: ${(props) => props.theme.headFont};
    font-size: 18px;
    color: #000000;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 20px;
  }
  @media ${device.tablet}{
    .head-wrap{
      margin-bottom: 50px;
    }
  }
  @media ${device.tabletL}{
    .head-wrap{
      text-align: left;
    }
  }
`;

export const ClassDetailWrap = styled(InstructorWrap)`
  .text-detail{
    padding: 0;
    .instructor-info{
      padding: 30px 20px 0px;
      .time{
        font-size: 14px;
        font-weight: 600;
      }
    }
    .select-class{
      background: #F0F9FF;
      border: 1px solid #B4B4B4;
      border-radius: 20px;
      font-family:  ${(props) => props.theme.contentFont};
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 600;
      color:  ${(props) => props.theme.primaryColor};
      position: relative;
      margin: 35px 20px 5px;
      padding: 8px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: all 0.2s linear;
      .icon-wrap{
        margin-left: 10px;
        border: 1px solid #B4B4B4;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s linear;
        img{
          opacity: 0;
          transition: all 0.2s linear;
        }
      }
      &.checked{
        background: ${(props) => props.theme.primaryColor};
        border-color: ${(props) => props.theme.primaryColor};
        color: #fff;
        .icon-wrap{
          background: #fff;
          img{
            opacity: 1;
          }
        }
      }
    }
    .description{
      .ant-collapse{
        background: none;
        border: none;
        .ant-collapse-item{
          border: none;
        }
        .ant-collapse-header{
          padding: 30px;
          margin: 0 40px 0 20px;
          font-family:  ${(props) => props.theme.contentFont};
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 600;
          color:  #525252;
          text-align: center;
        }
        .ant-collapse-content-box{
          background: #F0F9FF;
          padding: 40px 30px;
          .panel-body{
            .head{
              font-family:  ${(props) => props.theme.headFont};
              font-size: 16px;
              font-weight: 700;
              color: #151515;
              margin-bottom: 20px
            }
            p{
              font-family:  ${(props) => props.theme.contentFont};
              font-size: 14px;
              font-weight: 400;
              color: #000000;
            }
          }
        }
      }
    }
  }

  @media ${device.tabletL}{
    .image-detail{
      > div{
        height: 250px;
      }
    }
    .text-detail{
      .instructor-info{
        padding: 20px 20px 0px;
        .name{
          font-size: 16px;
        }
      }
      .select-class{
        font-size: 12px;
        margin: 25px 20px 5px;
        .icon-wrap{
          width: 12px;
          height: 12px;
        }
      }
      .description{
        .ant-collapse{
          .ant-collapse-header{
            padding: 20px;
            font-size: 12px;
          }
          .ant-collapse-content-box{
            padding: 30px 20px;
            .panel-body{
              .head{
                font-size: 14px;
                margin-bottom: 10px
              }
              p{
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
`;
