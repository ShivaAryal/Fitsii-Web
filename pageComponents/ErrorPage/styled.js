import styled from 'styled-components';

import { device } from "../../UiComponents/device";

export const ErrorSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  .error-image{
    img{
      max-width: 300px;
      margin: 0 auto;
    }
  }
  .text-detail{
    margin-top: 30px;
    .error-head{
      text-align: center;
      color: #02112E;
      margin-bottom: 20px;
      .error-title{
        font-family: ${(props) => props.theme.secondFont};
        font-size: 80px;
        line-height: 80px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .error-caption{
        font-family: ${(props) => props.theme.headFont};
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 2.6px;
        font-weight: 700;
      }
    }
    .error-foot{
      font-family: ${(props) => props.theme.headFont};
      text-align: center;
      color: #02112E;
      p{
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 2.2px;
        font-weight: 700;
      }
      a{
        font-size: 10px;
        color: #02112E;
        text-transform: uppercase;
        text-decoration: underline;
        font-weight: 700;
      }
    }
  }

  @media ${device.tablet}{
    flex-direction: row;
    .error-image{
      width: 50%;
      padding-left: 30px;
    }
    .text-detail{
      width: 50%;
      margin-top: 0;
    }
  }

  @media ${device.tabletL}{
    .error-image{
      width: 50%;
      padding-left: 30px;
      img{
        max-width: 100%;
      }
    }
    .text-detail{
      .error-head{
        margin: 0 auto 30px auto;
        max-width: 300px;
        .error-title{
          font-size: 180px;
          line-height: 180px;
          margin-bottom: 20px;
        }
        .error-caption{
          font-size: 22px;
          line-height: 32px;
        }
      }
      .error-foot{
        p{
          font-size: 14px;
        }
        a{
          font-size: 12px;
        }
      }
    }
  }
`;