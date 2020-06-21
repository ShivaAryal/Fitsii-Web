import React from 'react'
import Link from 'next/link'
import Error from "../../public/images/error.png";
import { SectionWrap, Container } from "../../UiComponents/Layout";
import { ImgWrap } from "../../components/Layout";

import { ErrorSection } from "./styled";

const ErrorPage = () => {
  return (
    <SectionWrap bgColor="#F0F9FF">
      <Container>
        <ErrorSection>
          <div className="text-detail">
            <div className="error-head">
              <div className="error-title">
                404
              </div>
              <div className="error-caption">
                Opps! You have some problems
              </div>
            </div>
            <div className="error-foot">
              <p>
                THE PAGE YOU ARE LOOKING FOR DOES NOT EXITS
              </p>
              <Link href="/">
                <a>
                  PLEASE RETURN TO HOMEPAGE
                </a>
              </Link>
            </div>
          </div>
          <div className="error-image">
            <ImgWrap src={Error} maxHeight="100%" alt='Error' />
          </div>
        </ErrorSection>
      </Container>
    </SectionWrap>
  )
}

export default ErrorPage
