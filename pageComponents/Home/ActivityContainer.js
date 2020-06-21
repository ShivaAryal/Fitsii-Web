import React from 'react'
import Slider from 'react-slick'
import Activity from '../../components/Activity/Activity'
import { ActivityData } from "./data"
import { SectionWrap, SectionSubtext, SectionTitle, Container, Heading, SliderStyle } from '../../UiComponents/Layout'
import { ActivitySection } from './styled'

const ActivityContainer = () => {
  // let settings = {
  //   dots: false,
  //   arrows: false,
  //   infinite: false,
  //   autoplay: false,
  //   autoplaySpeed: 5000,
  //   speed: 1000,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 2
  //       }
  //     },
  //     {
  //       breakpoint: 575,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };
  return (
    <SectionWrap className="home-activity-wrap">
      <Container>
        <ActivitySection>
          <Heading>
            <SectionSubtext>
              Fitsii
            </SectionSubtext>
            <SectionTitle>
              DISCOVER ACTIVITY
            </SectionTitle>
          </Heading>
          <div className="activities-wrap">
            {/* <SliderStyle>
              <Slider {...settings}> */}
            {ActivityData.map((val, key) => {
              return (
                <Activity key={key} name={val.name} image={val.img} />
              );
            })}
            {/* </Slider>
            </SliderStyle> */}
          </div>
        </ActivitySection>
      </Container>
    </SectionWrap >
  )
}

export default ActivityContainer
