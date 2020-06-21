import React from 'react'

import { ReviewCardWrap } from "./styled"

import { Rate } from 'antd'
import { StarFilled } from '@ant-design/icons'

import Customer from "../../../public/images/testi2.jpg";
import { CustomButton } from "../../../UiComponents/Buttons";

const ReviewCard = () => {
  return (
    <ReviewCardWrap>
      <div className="img-wrap">
        <img src={Customer} alt="user" />
      </div>
      <div className="comment-user-info">
        <div className="basic-detail">
          <div className="basic-info">
            <div className="time-detail">
              27 AUG 2017
            </div>
            <div className="user-name">
              Kalyana Miletic
            </div>
          </div>
          <div className="rating">
            <Rate character={<StarFilled />} disabled defaultValue={4} />
            4.4
          </div>
        </div>
        <div className="description">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.
        </div>
        <div className="button-wrap">
          <CustomButton>
            Like
          </CustomButton>
          <CustomButton>
            Reply
          </CustomButton>
        </div>
      </div>
    </ReviewCardWrap>
  )
}

export default ReviewCard
