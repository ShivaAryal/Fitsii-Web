import styled from 'styled-components';

import { ClassWrap } from "../../components/Class/styled";

export const InstituteSection = styled.div`
	position: relative;
  z-index: 1;
  .institute-list-wrap{
    padding: 60px 0;
    .ant-list-item{
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    }
  }
  .ant-pagination{
    text-align: center;
  }
`;

export const InstituteCardWrap = styled(ClassWrap)`
  background: #fff;
  .text-detail{
    border: none;
    .title{
      text-align: center;
    }
    .location{
      padding: 15px 0 5px;
      text-align: center;
      font-family: ${(props) => props.theme.contentFont};
      font-size: 13px;
      line-height: 20px;
      font-weight: 500;
      color: #000000;
    }
    .booking{
      text-align: center;
      font-family: ${(props) => props.theme.contentFont};
      font-size: 12px;
      line-height: 18px;
      font-weight: 500;
      color: #959595;
    }
  }
`;

export const FeaturedClassSection = styled.div`
	position: relative;
  z-index: 1;
`;