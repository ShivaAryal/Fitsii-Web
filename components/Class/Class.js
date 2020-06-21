import React, { useState } from 'react'
import { ClassWrap } from "./styled";
import { ImgWrap } from '../Layout';

import { Rate } from 'antd';
import {
  HeartFilled,
  StarOutlined
} from '@ant-design/icons';

import Gym from "../../public/images/gym.png";
import { CustomButton } from '../../UiComponents/Buttons';

const Class = () => {

  const [stateImage, setStateImage] = useState(Gym);

  return (
    <ClassWrap>
      <div className="image-detail">
        <ImgWrap src={stateImage} maxHeight="250px" alt='Gym' />
        <HeartFilled className="custom-icon" style={{ fontSize: '22px', color: '#FFFFFF59' }} />
        <div className="tag-wrap">
          Gym
        </div>
      </div>
      <div className="text-detail">
        <div className="title">
          Learn Full Body Workout
        </div>
        <div className="extra-info">
          <div className="price-rating">
            <div className="rating">
              <Rate character={<StarOutlined style={{ fontSize: '12px' }} />} disabled defaultValue={4} />
            </div>
            <div className="price">
              $84.00
            </div>
          </div>
          <div className="button-wrap">
            <CustomButton>
              MORE DETAIL
            </CustomButton>
          </div>
        </div>
      </div>
    </ClassWrap>
  )
}

export default Class
