import styled from 'styled-components';

import { InstituteSection } from "../Institutes/styled";

export const InstructorSection = styled(InstituteSection)`
  background: none;
  .text-detail{
    background: #ffffff !important;
  }
  .institute-list-wrap{
    .ant-list-item{
      > div{
        padding: 0;
      }
    }
  }
`;