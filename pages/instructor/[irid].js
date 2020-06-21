import React from 'react'
import { useRouter } from 'next/router'

import HeroBanner from '../../components/HeroBanner/HeroBanner'
import InstructorDetail from "../../pageComponents/InstructorDetail/InstructorDetail";
import FeaturedInstructor from '../../pageComponents/InstructorDetail/FeaturedInstructor';

const InstructorDetailPage = () => {
  const router = useRouter()
  const { irid } = router.query

  return (
    <div className="home-page instructor-detail-page">
      <HeroBanner title={irid} />
      <InstructorDetail />
      <FeaturedInstructor />
    </div>
  )
}

export default InstructorDetailPage