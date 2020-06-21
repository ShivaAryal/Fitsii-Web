import React from 'react'
import { useRouter } from 'next/router'

import HeroBanner from '../../components/HeroBanner/HeroBanner'
import InstituteDetail from "../../pageComponents/InstituteDetail/InstituteDetail";
import FeaturedClass from '../../pageComponents/InstituteDetail/FeaturedClass';

const InstitueDetailPage = () => {
  const router = useRouter()
  const { iid } = router.query


  return (
    <div className="home-page institue-detail-page">
      <HeroBanner title={iid} />
      <InstituteDetail />
      <FeaturedClass />
    </div>
  )
}

export default InstitueDetailPage