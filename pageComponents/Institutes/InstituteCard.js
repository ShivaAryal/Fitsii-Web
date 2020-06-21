import React, { useState } from 'react'
import Link from 'next/link'
import { InstituteCardWrap } from "./styled";
import { ImgWrap } from '../../components/Layout';

import { Rate } from 'antd';
import {
  StarOutlined
} from '@ant-design/icons';

import Gym from "../../public/images/gym.png";
import { CustomButton } from '../../UiComponents/Buttons';

const InstituteCard = (props) => {
  const { item } = props;

  const [stateImage, setStateImage] = useState(Gym);

  return (
    <InstituteCardWrap>
      <div className="image-detail">
        <ImgWrap src={stateImage} maxHeight="250px" alt='Gym' />
      </div>
      <div className="text-detail">
        <div className="title">
          {item.title}
        </div>
        <div className="location">
          {item.location}
        </div>
        <div className="booking">
          {item.booking}
        </div>
        <div className="extra-info">
          <div className="price-rating">
            <div className="rating">
              <Rate character={<StarOutlined style={{ fontSize: '12px' }} />} disabled defaultValue={item.star} />
            </div>
            <div className="price">
              {item.price}
            </div>
          </div>
          <div className="button-wrap">
            <Link
              href={`/institute/${item.inButton.link}`}
            >
              <a title={item.inButton.link}>
                <CustomButton>
                  {item.inButton.text}
                </CustomButton>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </InstituteCardWrap>
  )
}

export default InstituteCard
