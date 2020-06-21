import React from 'react'

import { Rate } from 'antd'
import { EnvironmentFilled, StarFilled } from '@ant-design/icons'
import { OverviewSection } from './styled'

const Overview = () => {

  return (
    <div id="overview-id">
      <OverviewSection>
        <div className="head-wrap">
          <div className="overview-head">
            <h2 className="section-title">
              Best Sydney Gym
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
            About this Instructor
          </h3>
          <p className="description">
            Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id.
          </p>
          <p className="description">
            Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere.Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit ametVestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. faucibus risus, a euismod lorem tincidunt id. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id.
          </p>
          <h4 className="section-subtitle">
            Inside The Gym
          </h4>
          <p className="description">
            Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies,viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id.
          </p>
        </div>
      </OverviewSection>
    </div>
  )
}

export default Overview
