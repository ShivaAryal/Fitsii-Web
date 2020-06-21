import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import ActivityContainer from '../pageComponents/Home/ActivityContainer';
import FeaturedClasses from '../pageComponents/Home/FeaturedClasses';
import OnlineClasses from '../pageComponents/Home/OnlineClasses';
import TraineeChoices from '../pageComponents/Home/TraineeChoices';

const Home = () => (
	<div className="home-page">
		<HeroBanner />
		<SearchBar homesearch="homesearch" />
		<ActivityContainer />
		<FeaturedClasses />
		<TraineeChoices />
		<OnlineClasses />
	</div>
);

export default Home;
