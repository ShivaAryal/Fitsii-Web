import React from 'react'
import { SortingWrap } from './styled'

import { Select } from 'antd'

const { Option } = Select


const SortingList = () => {
  let onChange = (value) => {
    console.log(`selected ${value}`);
  }

  let onSearch = (val) => {
    console.log('search:', val);
  }
  return (
    <SortingWrap>
      <div className="text-info">
        Sort By:
      </div>
      <div className="field location">
        <Select
          showSearch
          className="custom-select"
          placeholder="Location"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="ny">New York</Option>
          <Option value="la">Los Angelos</Option>
          <Option value="ph">Philedelphia</Option>
        </Select>
      </div>
      <div className="field activity">
        <Select
          showSearch
          className="custom-select"
          placeholder="Activity"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="yoga">Yoga</Option>
          <Option value="dance">Dance</Option>
          <Option value="gym">Gym</Option>
          <Option value="boxing">Boxing</Option>
        </Select>
      </div>
      <div className="field Rating">
        <Select
          showSearch
          className="custom-select"
          placeholder="Rating"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="5">5 star</Option>
          <Option value="4">4 star</Option>
          <Option value="3">3 star</Option>
          <Option value="2">2 Star</Option>
          <Option value="1">1 Star</Option>
        </Select>
      </div>
      <div className="field price">
        <Select
          showSearch
          className="custom-select"
          placeholder="Price"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="1">$100k - $200k</Option>
          <Option value="2">$200k - $300k</Option>
          <Option value="1">$300k - $400k</Option>
        </Select>
      </div>
    </SortingWrap>
  )
}

export default SortingList
