import React from 'react'

import { AmenitiesSection } from './styled'
import { AmenitiesData } from "./data";

const Amenities = () => {

  return (
    <div id="amenities-id">
      <AmenitiesSection>
        <div className="head-wrap">
          Amenities
        </div>
        <div className="amenities-list">
          {AmenitiesData.map((val, key) => {
            return (
              <div className="detail-wrap" key={key}>
                <div className="text-info">
                  {val.text}
                </div>
              </div>
            );
          })}
        </div>
      </AmenitiesSection>
    </div>
  )
}

export default Amenities
