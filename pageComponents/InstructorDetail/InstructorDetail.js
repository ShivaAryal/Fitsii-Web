import React, { useState, useEffect } from 'react'

import { Row, Col, Anchor } from 'antd'

import { InstructorDetailSection, InstructorAnchorHeader } from './styled'
import { SectionWrap, Container } from '../../UiComponents/Layout'
import InstructorContent from './InstructorContent'
import SideDetail from './SideDetail'

const { Link } = Anchor;

const InstructorDetail = () => {
  const [targetOffset, setTargetOffset] = useState(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);
  return (
    <React.Fragment>
      <InstructorAnchorHeader>
        <Anchor targetOffset={targetOffset}>
          <Link href="#overview-id" title="OverView" />
          <Link href="#gallery-id" title="Gallery" />
          <Link href="#amenities-id" title="Amenities" />
          <Link href="#classes-id" title="Classes" />
          <Link href="#reviews-id" title="Reviews" />
        </Anchor>
      </InstructorAnchorHeader>
      <SectionWrap>
        <Container>
          <InstructorDetailSection>
            <Row gutter={[44, 36]}>
              <Col xs={{ span: 24 }} lg={{ span: 13 }}>
                <InstructorContent />
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 9 }}>
                <SideDetail />
              </Col>
            </Row>
          </InstructorDetailSection>
        </Container>
      </SectionWrap>
    </React.Fragment>
  )
}

export default InstructorDetail
