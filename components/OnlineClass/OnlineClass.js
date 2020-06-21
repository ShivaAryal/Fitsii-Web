import React, { useState } from 'react'
import { OnlineClassWrap } from "./styled";
import { ImgWrap } from '../Layout';

import { Rate } from 'antd';
import {
  PlayCircleOutlined,
  StarOutlined
} from '@ant-design/icons';

import Zumba from "../../public/images/zumba.png";
import { CustomButton } from '../../UiComponents/Buttons';

const OnlineClass = () => {

  const [stateImage, setStateImage] = useState(Zumba);

  return (
    <OnlineClassWrap>
      <div className="image-detail">
        <ImgWrap src={stateImage} maxHeight="370px" alt='Zumba' />
        <div className="play-icon">
          <PlayCircleOutlined style={{ fontSize: '60px', color: '#fff' }} />
        </div>
        <div className="tag-wrap">
          Gym
        </div>
      </div>
      <div className="text-detail">
        <div className="time-detail">
          <div className="date">
            15th May, 2020
          </div>
          <div className="time">
            10 AM - 12 AM
          </div>
        </div>
        <div className="title">
          Become a zumba dancer from home
        </div>
        <div className="extra-info">
          <div className="button-wrap">
            <CustomButton>
              JOIN CLASS
            </CustomButton>
          </div>
          <div className="rating">
            <Rate character={<StarOutlined style={{ fontSize: '16px', color: '#F8BA04' }} />} disabled defaultValue={4} />
            <div className="text-rate">
              (250)
            </div>
          </div>
        </div>
      </div>
    </OnlineClassWrap>
  )
}

export default OnlineClass
