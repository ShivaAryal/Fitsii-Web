import styled from 'styled-components';

import { device } from "../../UiComponents/device";

export const SortingWrap = styled.div`
  position: relative;
  .text-info{
    font-family: ${(props) => props.theme.headFont};
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 22px;
    color: #959595;
    margin-bottom: 20px;
    text-align: center;
  }
  .field{
    padding: 0px 15px;
    margin-bottom: 10px;
    display: flex;
    .custom-select{
      border-radius: 18px;
      background: rgba(0, 144, 255, 0.71);
      font-family: ${(props) => props.theme.contentFont};
      font-size: 14px;
      line-height: 14px;
      font-weight: 600;
      width: 100%;
      max-width:200px;
      margin: 0 auto;
      text-transform: uppercase;
      color: #ffffff;
      .ant-select-selector{
        border: none;
        background: none;
        height: initial;
        padding: 0 20px;
        box-shadow: none;
        height: 40px;
        .ant-select-selection-search-input{
          height: 100%;
          left: 0;
          top: 0;
          padding: 0 10px;
        }
      }
      .ant-select-arrow{
        color: #ffffff;
        right: 20px;
      }
      .ant-select-selection-placeholder{
        opacity: 1;
        padding: 5px 18px 0 0;
      }
    }
  }
  .search-button-wrap{
    margin-top: 40px;
  }
  @media ${device.tablet}{
    display: flex;
    align-items: center;
    .text-info{
      width: 20%;
    }
    .field{
      display: flex;
      align-items: center;
      width: 20%;
      .select-option{
        padding: 0 25px 0 0;
        margin: 0 25px 0 0;
        align-items: flex-start;
        &::before{
          width: 1px;
          height: 95%;
          right: 0;
          left: initial;
          top: 50%;
          bottom: initial;
          transform: translate3d(0,-50%,0);
        }
        .custom-select{
          width: 150px;
          .ant-select-selector{
            padding: 0;
          }
        }
      }
      .search-button-wrap{
        margin: 0 0 0 20px;
      }
    }
  }
`;
