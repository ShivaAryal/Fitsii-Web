import React, { useState, useEffect } from 'react';
import { ActivityWrap } from './styled';
import { ImgWrap } from '../Layout';

import Yoga from "../../public/images/yoga.png";
import Dance from "../../public/images/dance.png";
import Gym from "../../public/images/gym.png";
import Boxing from "../../public/images/boxing.png";

const Activity = (props) => {
  const { name, image } = props;

  const [stateImage, setStateImage] = useState(Yoga);
  useEffect(() => {
    switch (image) {
      case 'yoga':
        setStateImage(Yoga);
        break;

      case 'dance':
        setStateImage(Dance);
        break;

      case 'gym':
        setStateImage(Gym);
        break;

      case 'boxing':
        setStateImage(Boxing);
        break;

      default:
        setStateImage(Yoga);
        break;
    }
  });



  return (
    <ActivityWrap>
      <ImgWrap src={stateImage} maxHeight="460px" alt={name} />
      <div className="text-detail">
        <h3>
          {name}
        </h3>
      </div>
    </ActivityWrap>
  )
}

export default Activity;
