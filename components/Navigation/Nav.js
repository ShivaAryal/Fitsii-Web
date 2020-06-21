import React, { useState } from 'react';
import Link from 'next/link';

import { Select } from 'antd';
import {
	CaretDownOutlined
} from '@ant-design/icons';

import Logo from '../../public/index.png';

import { CustomButton } from '../../UiComponents/Buttons';
import { NavWrap, ButtonWrap, NavBar } from '../styled';

const { Option } = Select;

const links = [
	{ href: '/institutes', label: 'Institute' },
	{ href: '/instructors', label: 'Instructor' },
	{ href: '/login', label: 'Login' }
].map((link) => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const Nav = () => {
	let handleChange = (value) => {
		console.log(`selected ${value}`);
	}
	return (
		<div className="top-wrap">
			<div className="container">
				<NavBar>
					<div className="logo-wrap">
						<Link href="/">
							<a className="navbar-brand" title="Affiliate">
								<img src={Logo} alt="logo" />
							</a>
						</Link>
					</div>
					<div className="menu-content">
						<NavWrap>
							<Select defaultValue="en" onChange={handleChange} suffixIcon={<CaretDownOutlined style={{ fontSize: '16px', color: '#000' }} />} className="custom-select">
								<Option value="en">Eng</Option>
								<Option value="esp">Esp</Option>
								<Option value="np">Np</Option>
							</Select>
							<nav>
								<ul>
									{links.map(({ key, href, label }) => (
										<li key={key}>
											<Link href={href}>
												<a>{label}</a>
											</Link>
										</li>
									))}
								</ul>
							</nav>
						</NavWrap>
						<ButtonWrap>
							<Link href="/signup">
								<a title="signup">
									<CustomButton bgColor='#0090FF' borderColor="#0090FF" pd="5px 20px" size="11px" fw="600">
										Sign Up
									</CustomButton>
								</a>
							</Link>
						</ButtonWrap>
					</div>
				</NavBar>
			</div>
		</div>
	);
};

export default Nav;
