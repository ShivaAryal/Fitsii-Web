import React, { useState } from 'react';
import { List } from 'antd';

import Class from '../../components/Class/Class'
import { SectionWrap, SectionSubtext, SectionTitle, Container, Heading } from '../../UiComponents/Layout';
import { MoreButton } from "../../UiComponents/Buttons";
import { ActivitySection } from './styled';
import { ClassesData } from "./data";

const FeaturedClasses = () => {
  const [listArray, setListArray] = useState(ClassesData);
  return (
    <SectionWrap className="home-activity-wrap">
      <Container>
        <ActivitySection>
          <Heading>
            <SectionSubtext>
              Fitsii
            </SectionSubtext>
            <SectionTitle>
              FEATURED CLASSES
            </SectionTitle>
          </Heading>
          <div className="classes-wrap">
            <List
              grid={{
                gutter: [16, 24],
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 4,
                xxl: 6,
              }}
              dataSource={listArray}
              renderItem={item => (
                <List.Item>
                  <Class item={item} />
                </List.Item>
              )}
            />

          </div>
          <MoreButton>
            See More
          </MoreButton>
        </ActivitySection>
      </Container>
    </SectionWrap >
  )
}

export default FeaturedClasses
