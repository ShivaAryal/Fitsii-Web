import React, { useState } from 'react'
import { TraineeClassWrap } from "./styled";
import { ImgWrap } from '../Layout';

import { Rate } from 'antd';
import {
  StarOutlined
} from '@ant-design/icons';

import Trainee from "../../public/images/trainee.png";
import { CustomButton } from '../../UiComponents/Buttons';

const TraineeClass = () => {

  const [stateImage, setStateImage] = useState(Trainee);

  return (
    <TraineeClassWrap>
      <div className="image-detail">
        <ImgWrap src={stateImage} maxHeight="250px" alt='Trainee' />
      </div>
      <div className="text-detail">
        <div className="tag-wrap">
          Wellness
        </div>
        <div className="title">
          Special Zumba Dancing Classes
        </div>
        <div className="description">
          Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum nunc putamus parum.
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
    </TraineeClassWrap>
  )
}

export default TraineeClass
