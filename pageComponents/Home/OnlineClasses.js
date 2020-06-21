import React from 'react'
import OnlineClass from '../../components/OnlineClass/OnlineClass'
import { OnlineClassData } from "./data";
import { SectionWrap, SectionSubtext, SectionTitle, Container, Heading } from '../../UiComponents/Layout';
import { OnlineClassSection } from './styled';
import { Row, Col } from 'antd';

const OnlineClasses = () => {
  return (
    <SectionWrap className="home-activity-wrap">
      <Container>
        <OnlineClassSection>
          <Heading>
            <SectionSubtext>
              Fitsii
            </SectionSubtext>
            <SectionTitle>
              LIVE ONLINE CLASSES
            </SectionTitle>
          </Heading>
          <div className="activities-wrap">
            <Row gutter={[24, 48]}>
              {OnlineClassData.map((val, key) => {
                return (
                  <Col xs={24} sm={8} key={key}>
                    <OnlineClass item={val} />
                  </Col>
                );
              })}
            </Row>
          </div>
        </OnlineClassSection>
      </Container>
    </SectionWrap >
  )
}

export default OnlineClasses
