import styled from 'styled-components';
import { device } from './device';

import Arrow from '../public/icons/slick-arrow.png';
import AltArrow from '../public/icons/arrow.svg';

// TEXT CSS

export const PageTitle = styled.h1`
	font-size: ${(props) => props.size || '26px'};
	line-height: ${(props) => props.lineHeight || '26px'};
	font-weight: ${(props) => props.weight || '700'};
	text-align: ${(props) => props.textAlign || 'center'};
	color: ${(props) => props.color || props.theme.primaryColor};
	margin: ${(props) => props.margin || 'initial'};
	font-family: ${(props) => props.font || props.theme.headFont};
`;

export const Heading = styled.div`
	padding-bottom: 15px;
	margin-bottom: 50px;
	position: relative;
	&::before{
		content: '';
		position: absolute;
		width: 30px;
		height: 1px;
		left: 0;
		bottom: 0;
		background: rgba(0,0,0,0.5);
	}
	&.no-decoration{
		padding-bottom: 0;
		&::before{
			display: none;
		}
	}
`;

export const SectionTitle = styled.h2`
	font-size: ${(props) => props.size || '26px'};
	font-weight: ${(props) => props.weight || '900'};
	text-align: ${(props) => props.textAlign || 'left'};
	color: ${(props) => props.color || '#000'};
	margin: ${(props) => props.margin || '0'};
	padding: ${(props) => props.padding || 'initial'};
	font-family: ${(props) => props.font || props.theme.headFont};
	text-transform: uppercase;
`;

export const SectionSubtext = styled.p`
	text-transform: uppercase;
	font-size: ${(props) => props.size || '16px'};
	font-weight: ${(props) => props.weight || 'bold'};
	letter-spacing: 9px;
	text-align: ${(props) => props.textAlign || 'left'};
	color: ${(props) => props.color || props.theme.primaryColor};
	margin: ${(props) => props.margin || '0'};
	padding: ${(props) => props.padding || 'initial'};
	font-family: ${(props) => props.font || props.theme.headingFont};
`;

export const ContentText = styled.div`
	font-size: ${(props) => props.size || '14px'};
	line-height: ${(props) => props.line || '22px'};
	font-weight: ${(props) => props.weight || '500'};
	text-align: ${(props) => props.textAlign || 'left'};
	color: ${(props) => props.color || props.theme.primaryColor};
	margin: ${(props) => props.margin || 'initial'};
	padding: ${(props) => props.padding || 'initial'};
	font-family: ${(props) => props.font || props.theme.contentFont};
	margin: ${(props) => props.margin || '20px auto 0 auto'};
	max-width: 735px;
`;

export const Description = styled.p`
	font-size: ${(props) => props.size || '14px'};
	line-height: ${(props) => props.line || '22px'};
	font-weight: ${(props) => props.weight || '600'};
	text-align: ${(props) => props.textAlign || 'center'};
	color: ${(props) => props.color || props.theme.primaryColor};
	opacity: ${(props) => props.opacity || '0.6'};
	margin: ${(props) => props.margin || 'initial'};
	padding: ${(props) => props.padding || 'initial'};
	font-family: ${(props) => props.font || props.theme.secondFont};
`;

export const SectionWrap = styled.div`
	background: ${(props) => props.bgColor || '#ffffff'};
	padding: 40px 0;
	&.home-activity-wrap{
		padding-top: 80px;
	}
	&.trainee-section{
		position: relative;
		padding-bottom: 0;
		&::before{
			content: '';
			position: absolute;
			width: 100%;
			height: calc(100% - 261px);
			left: 0;
			top: 0;
			background: rgba(0, 144, 255, 0.71);
		}
	}
	@media ${device.tabletL} {
		padding: 80px 0;
	}
`;

export const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	padding-right: 15px;
	padding-left: 15px;
	-webkit-box-sizing: inherit;
	box-sizing: inherit;
	@media ${device.tabletS} {
		width: 540px;
		max-width: 100%;
	}
	@media ${device.tablet} {
		width: 720px;
		max-width: 100%;
	}
	@media ${device.tabletL} {
		width: 960px;
		max-width: 100%;
	}
	@media ${device.laptopM} {
		width: 1140px;
		max-width: 100%;
	}
`;

// Image Css
export const ImageWrap = styled.div`
	width: ${(props) => props.width || '100%'};
	height: ${(props) => props.height || 'initial'};
	border-radius: ${(props) => props.radius || '0'};
	overflow: hidden;
	img {
		width: 100%;
		max-height: initial;
		object-fit: cover;
	}
	&.banner{
		position: relative;
		&::before{
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			background: rgba(0,0,0,0.3);
		}
	}
`;

// Slider Css

export const SliderStyle = styled.div`
	.slick-list {
		position: relative;
		padding-bottom: 30px;
	}
	.slick-next, .slick-prev {
		width: 25px;
		height: 40px;
		top: initial;
		right: 25%;
		bottom: -50px;
		&::before {
			opacity: 1;
			right: 0px;
			content: '' !important;
			background: url(${Arrow}) no-repeat center center;
			background-size: contain;
			height: 40px;
			width: 100%;
			display: block;
		}
	}
	.slick-prev{
		right: initial;
		left: 25%;
		&::before{
			-webkit-transform: scaleX(-1);
			transform: scaleX(-1);
		}
	}
	.slick-dots{
		bottom: -50px;
		text-align: center;
		li{
			width: 20px;
			height: 6px;
			border-radius: 3px;
			button{
				width: 20px;
				height: 6px;
				border-radius: 3px;
				&::before{
					content: '';
					width: 20px;
					height: 6px;
					border-radius: 3px;
					background: #FFFFFF;
					opacity: 0.2;
					transition: all 0.2s linear;
				}
			}
			&.slick-active{
				button{
					&::before{
						opacity: 1;
					}
				}
			}
		}
	}
	&.detail-page{
		.slick-next, .slick-prev {
			width: 25px;
			height: 40px;
			top: initial;
			right: 25%;
			bottom: -50px;
			&::before {
				opacity: 1;
				right: 0px;
				content: '' !important;
				background: url(${AltArrow}) no-repeat center center;
				background-size: contain;
				height: 40px;
				width: 100%;
				display: block;
			}
			&.slick-disabled{
				&::before{
					filter: brightness(0) invert(0);
					opacity: 0.4;
				}
			}
		}
		.slick-prev{
			right: initial;
			left: 25%;
			&::before{
				-webkit-transform: scaleX(-1);
				transform: scaleX(-1);
			}
		}
	}
	@media ${device.mobileL} {
		.slick-list{
			padding-bottom: 0;
		}
		.slick-next{
			right: 22%;
			bottom: -70px;
		}
		.slick-prev{
			left: 22%;
			bottom: -70px;
		}
		&.detail-page{
			.slick-next, .slick-prev {
				bottom: -70px;
			}
		}
	}
	@media ${device.tabletL} {
		.slick-next{
			right: 36%;
		}
		.slick-prev{
			left: 36%;
		}
		.slick-next
		.slick-dots{
			top: -78px;
			bottom: initial;
			text-align: right;
		}
		&.detail-page{
			.slick-next, .slick-prev {
				width: 25px;
				height: 40px;
				top: -30px;
				right: 0;
				bottom: initial;
			}
			.slick-prev{
				right: 40px;
				left: initial;
				&::before{
					-webkit-transform: scaleX(-1);
					transform: scaleX(-1);
				}
			}
		}
	}
`;