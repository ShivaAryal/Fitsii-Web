import React, { useState } from 'react'
import Link from 'next/link'
import { InstructorWrap } from "./styled";
import { ImgWrap } from '../Layout';

import {
  HeartFilled,
  StarFilled
} from '@ant-design/icons';

import Dance from "../../public/images/dance.png";
import { CustomButton } from '../../UiComponents/Buttons';

const Instructor = (props) => {

  const { item } = props;

  const [stateImage, setStateImage] = useState(Dance);

  return (
    <InstructorWrap>
      <div className="image-detail">
        <ImgWrap src={stateImage} maxHeight="320px" alt='Gym' />
        <HeartFilled className="custom-icon" style={{ fontSize: '22px', color: '#FFFFFF59' }} />
        <div className="tag-wrap">
          Gym
        </div>
      </div>
      <div className="text-detail">
        <div className="instructor-info">
          <div className="name-detail">
            <div className="name">
              Amy Jackson
            </div>
            <div className="time">
              10 am - 5:00 pm
            </div>
          </div>
          <div className="price">
            $84.00
          </div>
        </div>
        <div className="extra-info">
          <div className="button-wrap">
            <Link
              href={`/instructor/${item.inButton.link}`}
            >
              <a title={item.inButton.link}>
                <CustomButton>
                  {item.inButton.text}
                </CustomButton>
              </a>
            </Link>
          </div>
          <div className="rating">
            <StarFilled style={{ fontSize: '14px', marginRight: '5px', color: '#0081FF' }} />
              4.97
            </div>
        </div>
      </div>
    </InstructorWrap>
  )
}

export default Instructor
