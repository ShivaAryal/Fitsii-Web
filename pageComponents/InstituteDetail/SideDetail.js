import React from 'react'
import { FacebookFilled, InstagramFilled, TwitterCircleFilled } from '@ant-design/icons'
import { SideDetailWrap } from './styled'
import BookingDetails from './BookingDetails/BookingDetails'

const SideDetail = () => {
  return (
    <SideDetailWrap>
      <BookingDetails />
    </SideDetailWrap>
  )
}

export default SideDetail
