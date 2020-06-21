import React, { useState } from 'react'

import { List } from 'antd'

import { InstructorSection } from './styled'

import Instructor from "../../components/Instructor/Instructor";
import SortingList from '../../components/SortingList/SortingList'
import { SectionWrap, Container } from '../../UiComponents/Layout'

import { InstructorData } from "./data";

const InstitueList = () => {
  const [listArray, setListArray] = useState(InstructorData);

  return (
    <SectionWrap>
      <Container>
        <InstructorSection>
          <SortingList />
          <div className="institute-list-wrap">
            <List
              grid={{
                gutter: [16, 24],
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 3,
                xxl: 4,
              }}
              pagination={{
                onChange: page => {
                  console.log(page);
                },
                pageSize: 9,
              }}
              dataSource={listArray}
              renderItem={item => (
                <List.Item>
                  <Instructor item={item} />
                </List.Item>
              )}
            />
          </div>
        </InstructorSection>
      </Container>
    </SectionWrap>
  )
}

export default InstitueList
