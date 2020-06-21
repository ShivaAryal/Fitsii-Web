import React from 'react'

import { Rate } from 'antd'
import { EnvironmentFilled, StarFilled } from '@ant-design/icons'
import { InrOverviewSection } from './styled'

const Overview = () => {

  return (
    <div id="overview-id">
      <InrOverviewSection>
        <div className="head-wrap">
          <div className="overview-head">
            <h2 className="section-title">
              Amy jackson
            </h2>
            <div className="rating">
              <Rate character={<StarFilled />} disabled defaultValue={4} />
              4
            </div>
          </div>
          <div className="overview-description">
            <div className="location">
              <EnvironmentFilled />
            757 Market street, Sydney, AU
          </div>
            <div className="rating">
              <Rate character={<StarFilled />} disabled defaultValue={4} />
            4
          </div>
          </div>
        </div>
        <div className="overview-detail">
          <h3 className="section-title">
            About the Instructor
          </h3>
          <p className="description">
            Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id.
        </p>
          <h4 className="section-subtitle">
            Hobbies
          </h4>
          <p className="description">
            Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies,viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id.
        </p>
        </div>
      </InrOverviewSection>
    </div>
  )
}

export default Overview
