import React from 'react'

import { ReviewsSection } from './styled'
import { ReviewsData } from "./data"
import ReviewCard from './ReviewCard'

const Reviews = () => {

  return (
    <div id="reviews-id">
      <ReviewsSection>
        <div className="head-wrap">
          Reviews
        </div>
        <div className="reviews-list">
          {ReviewsData.map((val, key) => {
            return (
              <ReviewCard item={val} key={key} />
            );
          })}
        </div>
      </ReviewsSection>
    </div>
  )
}

export default Reviews
