import React from 'react'
import { InstructorData } from "./data";
import { SectionWrap, SectionTitle, Container, Heading } from '../../UiComponents/Layout';
import { Row, Col } from 'antd';
import Instructor from '../../components/Instructor/Instructor';

const FeaturedInstructor = () => {
  return (
    <SectionWrap className="home-activity-wrap">
      <Container>
        <div className="feat-wrap">
          <Heading className="no-decoration">
            <SectionTitle textAlign='center'>
              Similar Instructors
            </SectionTitle>
          </Heading>
          <div className="activities-wrap">
            <Row gutter={[24, 48]}>
              {InstructorData.map((val, key) => {
                return (
                  <Col xs={24} sm={8} key={key}>
                    <Instructor item={val} />
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </Container>
    </SectionWrap >
  )
}

export default FeaturedInstructor
