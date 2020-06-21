import React from 'react'

import { InrAmenitiesSection } from './styled'
import { AmenitiesData } from "./data";

const Amenities = () => {

  return (
    <div id="amenities-id">
      <InrAmenitiesSection>
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
      </InrAmenitiesSection>
    </div>
  )
}

export default Amenities
