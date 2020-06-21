import React from 'react'

import { ReviewsSection } from './styled'
import { ReviewsData } from "./data"
import ReviewCard from './ReviewCard'

const Reviews = () => {

  return (
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
  )
}

export default Reviews
