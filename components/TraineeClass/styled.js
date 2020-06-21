import styled from 'styled-components';
import { ClassWrap } from "../Class/styled";

import { device } from "../../UiComponents/device";

export const TraineeClassWrap = styled(ClassWrap)`
  .text-detail{
    .tag-wrap{
      font-family: ${(props) => props.theme.headFont};
      font-weight: bold;
      font-size: 10px;
      line-height: 10px;
      width: fit-content;
      color: #8799A3;
      border-radius: 10px;
      padding: 7px 16px 6px;
      background: #F0F4F7;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    .description{
      font-family: ${(props) => props.theme.contentFont};
      font-size: 12px;
      line-height: 20px;
      font-weight: 500;
      margin-top: 10px;
      color: #636363;
    }
  }
  @media ${device.tablet}{
    display: flex;
    max-width: 100%;
    .image-detail{
      width: 65%;
      img{
        max-height: 500px !important;
      }
    }
    .text-detail{
      width: 35%;
      padding: 35px 25px; 
      .tag-wrap{
        margin-bottom: 35px;
      }
      .title{
        font-size: 22px;
        line-height: 30px;
      }
      .description{
        margin-top: 30px;
        font-size: 14px;
        line-height: 22px;
      }
      .extra-info{
        margin-top: 40px;
      }
    }
  }
`;
