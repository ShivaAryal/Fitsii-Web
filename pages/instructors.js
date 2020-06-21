import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import InstructorList from '../pageComponents/Instructors/InstructorList';

const Institutes = () => (
  <div className="home-page institue-page">
    <HeroBanner title="Instructors" caption="Get more from every workout with customized guideance of personal training" />
    <SearchBar homesearch="homesearch" />
    <InstructorList />
  </div>
);

export default Institutes;
