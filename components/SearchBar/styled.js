import styled from 'styled-components';

import { device } from "../../UiComponents/device";

export const SearchWrap = styled.div`
	background: #fff;
  width: 100%;
  box-shadow: 0px 39px 76px 0 rgba(86, 109, 124, 0.15);
  position: relative;
  .title-text{
    font-family: ${(props) => props.theme.mainFont};
    font-weight: bold;
    font-size: 28px;
    line-height: 28px;
    color: #000;
    background: #DDF0FD;
    padding: 20px 15px;
    text-align: center;
  }
  .search-form{
    padding: 30px 15px;
    .select-option{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 10px;
      margin-bottom: 30px;
      position: relative;
      &::before{
        content: '';
        position: absolute;
        width: 50%;
        max-width: 200px;
        height: 1px;
        background: rgba(0, 0, 0, 0.1);
        bottom: 0;
        left: 50%;
        transform: translate3d(-50%,0,0);
      }
      .label{
        font-family: ${(props) => props.theme.headFont};
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 2.6px;
        text-align: center;
        color: #000000;
        margin-bottom: 10px;
        text-transform: uppercase;
      }
      .custom-select{
        background: none;
        font-family: ${(props) => props.theme.contentFont};
        font-size: 14px;
        line-height: 14px;
        font-weight: 700;
        width: 150px;
        text-transform: uppercase;
        color: #000000;
        .ant-select-selector{
          border: none;
          background: none;
          height: initial;
          box-shadow: none;
        }
      }
    }
    .search-button-wrap{
      margin-top: 40px;
    }
  }
  &.homesearch{
    margin-top: -48px;
  }

  @media ${device.tabletL}{
    display: flex;
    align-items: center;
    .title-text{
      width: 100%;
      font-size: 36px;
      line-height: 36px;
      padding: 40px 20px;
    }
    .search-form{
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0 30px;
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
        .label{
          font-size: 10px;
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
