import styled from 'styled-components';

export const OnlineClassWrap = styled.div`
  width: 100%;
	margin: 0 auto;
	max-width: 360px;
  box-shadow: 0px 30px 160px 0 rgba(0, 0, 0, 0.15);
  .image-detail{
    border-radius: 15px 15px 0px 0px;
    position: relative;
    overflow:hidden;
    cursor: pointer;
    &::before{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 144, 255, 0.71);
      z-index: 1;
      opacity: 0;
      transition: all 0.2s linear;
    }
    .play-icon{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate3d(-50%,-50%,0);
      z-index: 2;
      opacity: 0;
      transition: all 0.2s linear;
    }
    .tag-wrap{
      position: absolute;
      right: 20px;
      bottom: 15px;
      font-family: ${(props) => props.theme.headFont};
      font-weight: bold;
      font-size: 14px;
      line-height: 14px;
      color: #000000;
      border-radius: 10px;
      padding: 10px 25px;
      background: #FFFFFF59;
      text-transform: uppercase;
      z-index: 2;
    }
    &:hover{
      &::before{
      opacity: 1;
      }
      .play-icon{
        opacity: 1;
      }
    }
  }
  .text-detail{
    padding: 20px 20px 30px;
    border-radius: 0px 0px 15px 15px;
    overflow: hidden;
    .time-detail{
      display: flex;
      justify-content: space-between;
      font-family: ${(props) => props.theme.headFont};
      font-size: 14px;
      line-height: 36px;
      font-weight: 500;
      color: ${(props) => props.theme.primaryColor};
      .time{
        padding: 0 20px;
        border-radius: 100px;
        background: rgba(0, 181, 146, 0.1);
      }
    }
    .title{
      font-family: ${(props) => props.theme.headFont};
      font-size: 18px;
      font-weight: bold;
      color: #475677;
      margin: 30px 0;
    }
    .extra-info{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      .rating{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        .text-rate{
          font-family: ${(props) => props.theme.contentFont};
          font-size: 16px;
          line-height: 16px;
          font-weight: 500;
          color: #7D8597;
          margin-left: 10px;
        }
      }
    }
  }
`;
