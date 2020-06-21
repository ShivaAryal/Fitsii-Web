import React, { useState, useEffect } from 'react'

import { Row, Col, Anchor } from 'antd'

import { InstituteDetailSection, AnchorHeader } from './styled'
import { SectionWrap, Container } from '../../UiComponents/Layout'
import InstituteContent from './InstituteContent'
import SideDetail from './SideDetail'

const { Link } = Anchor;

const InstituteDetail = () => {
  const [targetOffset, setTargetOffset] = useState(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);
  return (
    <React.Fragment>
      <AnchorHeader>
        <Anchor targetOffset={targetOffset}>
          <Link href="#overview-id" title="OverView" />
          <Link href="#gallery-id" title="Gallery" />
          <Link href="#amenities-id" title="Amenities" />
          <Link href="#classes-id" title="Classes" />
          <Link href="#reviews-id" title="Reviews" />
        </Anchor>
      </AnchorHeader>
      <SectionWrap>
        <Container>
          <InstituteDetailSection>
            <Row gutter={[44, 36]}>
              <Col xs={{ span: 24 }} lg={{ span: 13 }}>
                <InstituteContent />
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 9 }}>
                <SideDetail />
              </Col>
            </Row>
          </InstituteDetailSection>
        </Container>
      </SectionWrap>
    </React.Fragment>
  )
}

export default InstituteDetail
