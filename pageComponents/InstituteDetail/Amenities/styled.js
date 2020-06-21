import styled from 'styled-components';

import { device } from "../../../UiComponents/device";

export const AmenitiesSection = styled.div`
	position: relative;
  z-index: 1;
  margin: 30px 0 30px;
  .head-wrap{
    text-align: center;
    font-family: ${(props) => props.theme.headFont};
    font-size: 18px;
    color: #000000;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 30px;
  }
  .amenities-list{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .detail-wrap{
      display: flex;
      justify-content: center;
      width: 50%;
      margin: 0 auto 20px auto;
      .text-info{
        border-radius: 20px;
        background: #F0F9FF;
        padding: 10px 40px;
        font-family: ${(props) => props.theme.contentFont};
        font-size: 12px;
        text-transform: uppercase;
        text-align: center;
        font-weight: 700;
        color: #262626;
      }
    }
  }
  @media ${device.tabletS}{
    .amenities-list{
      .detail-wrap{
        width: initial;
      }
    }
  }
  @media ${device.tabletL}{
    padding-top: 30px;
    .head-wrap{
      text-align: left;
    }
    .amenities-list{
      justify-content: flex-start;
    }
  }
`;