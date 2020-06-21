import styled from 'styled-components';

import { device } from "../../UiComponents/device";

export const AnchorHeader = styled.div`
  .ant-anchor-wrapper{
    padding: 25px 0;
    background: #F0F9FF;
  }
  .ant-anchor{
    display: flex;
    padding-left: 120px;
    justify-content: center;
    overflow-x: scroll;
    .ant-anchor-ink{
      display: none;
    }
    .ant-anchor-link{
      padding: 10px 20px;
      .ant-anchor-link-title{
        font-family: ${(props) => props.theme.headFont};
        color: #686868;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 700; 
      }
      &.ant-anchor-link-active{
        .ant-anchor-link-title{
          color: ${(props) => props.theme.primaryColor};
        }
      }
    }
  }
  @media ${device.tabletS}{
    .ant-anchor{
      padding-left: 0;
      overflow: hidden;
    }
  }
  @media ${device.tabletL}{
    .ant-anchor{
      margin-left: auto;
      margin-right: auto;
      padding-right: 15px;
      padding-left: 15px;
      width: 960px;
      max-width: 100%;
      justify-content: flex-start;
    }
  }
  @media ${device.laptopM} {
    .ant-anchor{
      width: 1140px;
      max-width: 100%;
    }
	}
`;

export const InstituteDetailSection = styled.div`
	position: relative;
  z-index: 1;
  .anchor-header{
    .ant-anchor{
      display: flex;
      .ant-anchor-ink{
        display: none;
      }
    }
  }
`;

export const InstituteContentSection = styled.div`
	position: relative;
  z-index: 1;
  .ant-tabs-nav-scroll{
    display: flex;
    justify-content: center;
  }
  .ant-tabs-nav{
    .ant-tabs-tab{
      font-family: ${(props) => props.theme.headFont};
      color: #636363;
      font-weight: 700;
      &.ant-tabs-tab-active{
        color: ${(props) => props.theme.primaryColor};
      }
    }
  }
  @media ${device.tabletL}{
    .ant-tabs-nav-scroll{
      display: flex;
      justify-content: flex-start;
    }
  }
`;

export const SideDetailWrap = styled.div`
	position: relative;
  z-index: 1;
  .share-wrap{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    .share-button {
      font-family: ${(props) => props.theme.headFont};
      font-size: 10px;
      line-height: 10px;
      font-weight: 600;
      text-align: center;
      text-transform: uppercase;
      padding: 8px 25px;
      width: 28%;
      border: 2px solid #00acee ;
      color: #00acee ;
      border-radius: 15px;
      margin-right: 10px;
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: center;
      .anticon {
        margin-right: 8px;
        color: #00acee ;
        font-size: 16px;
      }
      &.fb {
        border-color: #3b5998;
        color: #5b7abb;
        .anticon {
          color: #3b5998;
        }
      }
      &.insta{
        border-color: #E1306C;
        color: #E1306C;
        .anticon {
          color: #E1306C;
        }
      }
      &:last-child{
        margin-right: 0;
      }
    }
  }
  @media ${device.tabletL}{
    .share-wrap{
      .share-button{
        font-size: 12px;
        line-height: 12px;
        padding: 8px 30px;
        width: 30%;
        .anticon{
          font-size: 18px;
        }
      }
    }
  }
`;