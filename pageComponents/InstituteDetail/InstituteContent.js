import React from 'react'

import Overview from './Overview/Overview';
import Amenities from './Amenities/Amenities';

import { InstituteContentSection } from "./styled";
import Reviews from './Reviews/Reviews';
import Gallery from './Gallery/Gallery';
import InstituteClass from './InstituteClasses/InstituteClasses';

const InstituteContent = () => {
  return (
    <InstituteContentSection>
      <Overview />
      <Gallery />
      <Amenities />
      <InstituteClass />
      <Reviews />
    </InstituteContentSection>
  )
}

export default InstituteContent
