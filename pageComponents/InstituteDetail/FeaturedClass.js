import React from 'react'
import { ClassesData } from "./data";
import { SectionWrap, SectionTitle, Container, Heading } from '../../UiComponents/Layout';
import { FeaturedClassSection } from '../Institutes/styled';
import { Row, Col } from 'antd';
import Class from '../../components/Class/Class';

const FeaturedClass = () => {
  return (
    <SectionWrap className="home-activity-wrap">
      <Container>
        <FeaturedClassSection>
          <Heading className="no-decoration">
            <SectionTitle textAlign='center'>
              FEATURED CLASSES
            </SectionTitle>
          </Heading>
          <div className="activities-wrap">
            <Row gutter={[24, 48]}>
              {ClassesData.map((val, key) => {
                return (
                  <Col xs={24} sm={8} key={key}>
                    <Class item={val} />
                  </Col>
                );
              })}
            </Row>
          </div>
        </FeaturedClassSection>
      </Container>
    </SectionWrap >
  )
}

export default FeaturedClass
