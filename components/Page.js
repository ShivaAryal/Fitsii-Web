import React, { Component } from 'react';
import Meta from './Meta';
import Navigation from './Navigation/Navigation';
import Footer from './Footer';

class Page extends Component {
	render() {
		return (
			<div className="App">
				<Meta />
				<Navigation />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

export default Page;
