import styled from 'styled-components';

import { device } from "../../UiComponents/device";
import { AnchorHeader } from "../InstituteDetail/styled";

export const InstructorAnchorHeader = styled(AnchorHeader)`
  
`;

export const InstructorDetailSection = styled.div`
	position: relative;
  z-index: 1;
`;

export const InstructorContentSection = styled.div`
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