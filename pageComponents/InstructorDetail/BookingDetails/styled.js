import styled from 'styled-components';

import { BookingSection, BookingInfo, ContactWrap } from "../../InstituteDetail/BookingDetails/styled";

export const InrBookingSection = styled(BookingSection)`
`;

export const InrBookingInfo = styled(BookingInfo)`
`;

export const InrContactWrap = styled(ContactWrap)`
  .head-title{
    font-family: ${(props) => props.theme.headFont};
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    color: #334565;
    text-align: center;
    margin-bottom: 20px;
  }
  .app-link{
    width: fit-content;
    background: #334565;
    padding: 0px 30px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${(props) => props.theme.headFont};
    font-size: 10px;
    line-height: 36px;
    font-weight: 500;
    color: #ffffff;
    .anticon{
      color: #ffffff;
      font-size: 14px;
      margin-right: 7px;
    }
    &:first-child{
      margin-bottom: 10px;
    }
  }
`;