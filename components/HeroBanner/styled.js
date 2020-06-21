import styled from 'styled-components';
import { device } from "../../UiComponents/device";

export const BannerWrap = styled.div`
  position: relative;
  .text-detail{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .hero-title{
      font-family: ${(props) => props.theme.headFont};
      font-weight: 500;
      font-size: 28px;
      line-height: 36px;
      max-width: 935px;
      text-align: center;
      color: #ffffff;
      text-transform: capitalize;
      margin-bottom: 20px;
      .heavy{
        font-weight: 700;
      }
    }
    .caption{
      font-family: ${(props) => props.theme.secondFont};
      max-width: 935px;
      text-align: center;
      font-style: italic;
      font-size: 12px;
      line-heigh: 20px;
      color: #ffffff;
      margin: 0;
    }
  }
  @media ${device.tabletL}{
    .text-detail{
      .hero-title{
        font-size: 60px;
        line-height: 68px;
      }
      .caption{
        font-size: 16px;
        line-heigh: 24px;
        color: #ffffff;
      }
    }
  }
`;