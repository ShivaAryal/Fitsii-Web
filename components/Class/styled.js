import styled from 'styled-components';

export const ClassWrap = styled.div`
	background: #fff;
  width: 100%;
	margin: 0 auto;
	max-width: 360px;
  box-shadow: 0px 1px 1px 0 rgba(86, 109, 124, 0.15);
  .image-detail{
    position: relative;
    img{
      opacity: 0.9;
    }
    .custom-icon{
      position: absolute;
      right: 20px;
      top:25px;
    }
    .tag-wrap{
      position: absolute;
      left: 20px;
      bottom: 15px;
      font-family: ${(props) => props.theme.headFont};
      font-weight: bold;
      font-size: 10px;
      line-height: 10px;
      color: #8799A3;
      border-radius: 10px;
      padding: 7px 16px 6px;
      background: #F0F4F7;
      text-transform: uppercase;
    }
  }
  .text-detail{
    border: 1px solid #EBEBEB;
    padding: 20px 20px 30px;
    .title, .price{
      font-family: ${(props) => props.theme.headFont};
      font-size: 18px;
      line-height: 26px;
      font-weight: bold;
      color: ${(props) => props.theme.textColor};
    }
    .extra-info{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      .rating{
        .ant-rate-star{
          margin-right: 3px;
          .anticon{
            color: #F8BA04;
          }
          &.ant-rate-star-zero{
            .anticon{
              color: #D1D1D1;
            }
          }
        }
      }
      .price{
        margin-top: 5px;
        font-size: 18px;
      }
    }
  }
`;
