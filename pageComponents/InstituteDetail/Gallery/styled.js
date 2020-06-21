import styled from 'styled-components';

import { device } from "../../../UiComponents/device";

export const GallerySection = styled.div`
	position: relative;
  z-index: 1;
  margin: 60px 0 60px;
  .head-wrap{
    text-align: center;
    font-family: ${(props) => props.theme.headFont};
    font-size: 18px;
    color: #000000;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .slider-list{
    margin-bottom: 60px;
    img{
      max-width: 300px;
      margin: 0 auto;
      padding: 0 8px;
    }
  }
  @media ${device.mobileL}{
    .slider-list{
      margin-bottom: 100px;
    }
  }
  @media ${device.tablet}{
    margin-bottom: 100px;
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