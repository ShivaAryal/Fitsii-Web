import React, { useState } from 'react'

import { List } from 'antd'

import { InstituteSection } from './styled'
import SortingList from '../../components/SortingList/SortingList'
import { SectionWrap, Container } from '../../UiComponents/Layout'

import { InstituteData } from "./data";
import InstituteCard from './InstituteCard';

const InstituteList = () => {
  const [listArray, setListArray] = useState(InstituteData);

  return (
    <SectionWrap>
      <Container>
        <InstituteSection>
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
                  <InstituteCard item={item} />
                </List.Item>
              )}
            />
          </div>
        </InstituteSection>
      </Container>
    </SectionWrap>
  )
}

export default InstituteList
