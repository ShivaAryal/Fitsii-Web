import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import InstituteList from '../pageComponents/Institutes/InstituteList';

const Institutes = () => (
  <div className="home-page institue-page">
    <HeroBanner title="Institutes" caption="Get more from every workout with customized guideance of personal training" />
    <SearchBar homesearch="homesearch" />
    <InstituteList />
  </div>
);

export default Institutes;
