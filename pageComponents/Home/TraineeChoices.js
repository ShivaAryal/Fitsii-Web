import React from 'react'

import Slider from 'react-slick'

import { SectionWrap, Container, Heading, SectionTitle, ContentText, SliderStyle } from '../../UiComponents/Layout'
import { MoreButton } from "../../UiComponents/Buttons"

import { TraineeChoiceSection, TopInstructorsSection } from './styled'
import TraineeClass from '../../components/TraineeClass/TraineeClass'
import Instructor from '../../components/Instructor/Instructor'

import { InstructorData, TraniersChoiceData } from "./data"

const TraineeChoices = () => {
  let settings1 = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  let settings2 = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <SectionWrap className="trainee-section">
      <Container>
        <TraineeChoiceSection>
          <Heading className="no-decoration">
            <SectionTitle color="#fff">
              Trainee's Choice Classes
            </SectionTitle>
          </Heading>
          <div className="class-list-wrap">
            <SliderStyle>
              <Slider {...settings1}>
                {TraniersChoiceData.map((val, key) => {
                  return (
                    <TraineeClass val={val} key={key} />
                  );
                })}
              </Slider>
            </SliderStyle>
          </div>
        </TraineeChoiceSection>
        <TopInstructorsSection>
          <Heading className="no-decoration">
            <SectionTitle color="#fff" textAlign="center">
              Our Top Instructors
            </SectionTitle>
            <ContentText color="#fff" textAlign="center">
              Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas est etiam processus dynamicus, qui sequitur mutationem.
            </ContentText>
          </Heading>
          <div className="top-instructor-list">
            <SliderStyle>
              <Slider {...settings2}>
                {InstructorData.map((val, key) => {
                  return (
                    <Instructor item={val} key={key} />
                  );
                })}
              </Slider>
            </SliderStyle>
            <MoreButton mg="60px auto 0 auto">
              All Instructors
            </MoreButton>
          </div>
        </TopInstructorsSection>
      </Container>
    </SectionWrap>
  )
}

export default TraineeChoices
