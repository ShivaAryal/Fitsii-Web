import React from 'react'

import { BookingClassList } from "./styled"
import Zumba from "../../../public/images/zumba.png";
import Check from "../../../public/icons/select.svg";
import { ImgWrap } from '../../../components/Layout'

const ClassList = () => {
  return (
    <BookingClassList>
      <ImgWrap src={Zumba} height="100%" alt="class" />
      <div className="class-title">
        Learn Full Body Workout
        <div className="icon-wrap circle">
          <img src={Check} alt="select" />
        </div>
      </div>
    </BookingClassList>
  )
}

export default ClassList
