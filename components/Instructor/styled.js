import styled from 'styled-components';

export const InstructorWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
	max-width: 360px;
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
      right: 20px;
      bottom: 15px;
      font-family: ${(props) => props.theme.headFont};
      font-weight: bold;
      font-size: 10px;
      line-height: 10px;
      color: #000000;
      border-radius: 10px;
      padding: 7px 16px 6px;
      background: #FFFFFF59;
      text-transform: uppercase;
    }
  }
  .text-detail{
    padding: 20px 20px 30px;
    background: #f1f1f1;
    .name, .price{
      font-family: ${(props) => props.theme.headFont};
      font-size: 18px;
      font-weight: bold;
      color: ${(props) => props.theme.textColor};
    }
    .instructor-info{
      display: flex;
      justify-content: space-between;
      .time{
        font-family: ${(props) => props.theme.contentFont};
        font-size: 12px;
        font-weight: 500;
        font-style: italic;
        color: #212529;
        margin-top: 5px;
      }
      .price{
        font-size: 18px;
        color: #505050;
      }
    }
    .extra-info{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      .rating{
        font-family: ${(props) => props.theme.contentFont};
        font-size: 14px;
        font-weight: bold;
        color: #191F4D;
      }
    }
  }
`;
