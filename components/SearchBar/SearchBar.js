import React from 'react'

import { Select } from 'antd';
import {
  DownOutlined
} from '@ant-design/icons';

import { SearchWrap } from './styled'
import { Container } from '../../UiComponents/Layout'
import { SquareButton } from '../../UiComponents/Buttons';

const { Option } = Select;

const SearchBar = (props) => {
  let handleChange = (value) => {
    console.log(`selected ${value}`);
  }
  return (
    <Container>
      <SearchWrap className={props.homesearch}>
        <div className="title-text">
          Book Now
        </div>
        <div className="search-form">
          <div className="select-option activity">
            <div className="label">
              Activity
            </div>
            <Select defaultValue="dance" onChange={handleChange} suffixIcon={<DownOutlined style={{ fontSize: '12px', color: '#000' }} />} className="custom-select">
              <Option value="dance">Dance</Option>
              <Option value="gym">Gym</Option>
              <Option value="zumba">Zumba</Option>
            </Select>
          </div>
          <div className="select-option price">
            <div className="label">
              Price Range
            </div>
            <Select defaultValue="1" onChange={handleChange} suffixIcon={<DownOutlined style={{ fontSize: '12px', color: '#000' }} />} className="custom-select">
              <Option value="1">$100-$200</Option>
              <Option value="2">$300-$400</Option>
              <Option value="3">$500-$600</Option>
            </Select>
          </div>
          <div className="select-option location">
            <div className="label">
              Location
            </div>
            <Select defaultValue="dance" onChange={handleChange} suffixIcon={<DownOutlined style={{ fontSize: '12px', color: '#000' }} />} className="custom-select">
              <Option value="dance">Dance</Option>
              <Option value="gym">Gym</Option>
              <Option value="zumba">Zumba</Option>
            </Select>
          </div>
          <div className="search-button-wrap">
            <SquareButton bgColor="#0081FF" borderColor="#0081FF" pd="7px 30px" fw="600">
              Search
            </SquareButton>
          </div>
        </div>
      </SearchWrap>
    </Container>
  )
}

export default SearchBar
