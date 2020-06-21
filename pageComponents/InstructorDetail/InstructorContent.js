import React from 'react'

import Overview from './Overview/Overview';
import Amenities from './Amenities/Amenities';

import { InstructorContentSection } from "./styled";
import Reviews from './Reviews/Reviews';
import Gallery from './Gallery/Gallery';

function callback(key) {
  console.log(key);
}

const InstructorContent = () => {
  return (
    <InstructorContentSection>
      <Overview />
      <Gallery />
      <Amenities />
      <Reviews />
    </InstructorContentSection>
  )
}

export default InstructorContent
