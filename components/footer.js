import React from 'react';
import Link from 'next/link';
import {
	AppleFilled,
	AndroidFilled,
	TwitterCircleFilled,
	LinkedinFilled,
	BehanceCircleFilled,
	DribbbleCircleFilled
} from '@ant-design/icons';
import Logo from '../public/index.png';
import { FooterCss } from './styled';
import { SectionWrap, Container } from '../UiComponents/Layout';

const Footer = () => (
	<FooterCss>
		<Container>
			<SectionWrap>
				<div className="footer-content">
					<div className="logo-wrap">
						<Link href="/">
							<a className="navbar-brand" title="Affiliate">
								<img src={Logo} alt="logo" style={{ width: '80px' }} />
							</a>
						</Link>
						<ul className="social-links">
							<li>
								<Link href="/twitter">
									<a>
										<TwitterCircleFilled />
									</a>
								</Link>
							</li>
							<li>
								<Link href="/linkedin">
									<a>
										<LinkedinFilled />
									</a>
								</Link>
							</li>
							<li>
								<Link href="/behance">
									<a>
										<BehanceCircleFilled />
									</a>
								</Link>
							</li>
							<li>
								<Link href="/dribble">
									<a>
										<DribbbleCircleFilled />
									</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="extra-content">
						<div className="head-title">
							Support
						</div>
						<ul>
							<li>
								<Link href="/terms">
									<a>
										Terms Condition
									</a>
								</Link>
							</li>
							<li>
								<Link href="/policy">
									<a>
										Privacy & Policy
									</a>
								</Link>
							</li>
							<li>
								<Link href="/copyright">
									<a>
										Copyright Issue
									</a>
								</Link>
							</li>
							<li>
								<Link href="/help">
									<a>
										Get Help
									</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="extra-content">
						<div className="head-title">
							Join Us
						</div>
						<ul>
							<li>
								<Link href="/join">
									<a>
										Become Teacher
									</a>
								</Link>
							</li>
							<li>
								<Link href="/join">
									<a>
										Become Student
									</a>
								</Link>
							</li>
							<li>
								<Link href="/join">
									<a>
										Become Both
									</a>
								</Link>
							</li>
							<li>
								<Link href="/join">
									<a>
										Partnership
									</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="extra-content">
						<div className="head-title">
							Download App
						</div>
						<div className="app-download">
							<div className="app-link ios">
								<AppleFilled />
								Apple IOS
							</div>
							<div className="app-link android">
								<AndroidFilled />
								Google Play
							</div>
						</div>
					</div>
				</div>
			</SectionWrap>
		</Container>
	</FooterCss>
);

export default Footer;
