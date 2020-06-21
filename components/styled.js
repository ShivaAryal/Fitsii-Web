import styled from 'styled-components';

import { device } from "../UiComponents/device";

export const NavigationStyle = styled.div`
	.desktop{
		display: none;
	}
	@media ${device.tabletS}{
		.desktop{
			display: block;
		}
		.mobile{
			display: none;
		}
	}
`;

export const NavBar = styled.div`
	padding: 30px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	.logo-wrap {
		img {
			width: 50px;
		}
	}
	.menu-content{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

export const MobileNavBar = styled(NavBar)`
	padding: 80px 0 30px;
	display: block;
	position: relative;
	.logo-wrap{
		display: flex;
		justify-contenT: center;
		margin-bottom: 40px;
		img{
			width: 80px;
		}
	}
	.menu-content{
		display: block;
	}
	.back-icon{
		position: absolute;
		right: 10px;
		top: 5px;
	}
`;

export const NavWrap = styled.div`
	text-align: center;
	display: flex;
	align-items: center;
	.custom-select{
		margin-right: 30px;
		background: none;
		line-height: 14px;
		font-family: ${(props) => props.theme.headFont};
		font-size: 12px;
		font-weight: 700;
		text-transform: uppercase;
		color: #000000;
		.ant-select-selector{
			border: none;
			background: none;
			height: initial;
		}
	}
	nav {
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			li {
				display: inline-block;
				margin-right: 40px;
				a {
					font-family: ${(props) => props.theme.headFont};
					font-size: 12px;
					font-weight: 700;
					text-transform: uppercase;
					color: #000000;
				}
				&:last-child {
					margin-right: 0;
				}
			}
		}
	}
`;

export const MobileNavWrap = styled(NavWrap)`
	display: block;
	nav{
		ul{
			li{
				display: block;
				margin: 0;
				padding: 15px 20px;
				a{
					font-size: 18px;
				}
			}
		}
	}
`;

export const ButtonWrap = styled.div`
	margin-top: 50px;
	div{
		font-size: 16px;
		padding: 6px 50px;
	}
	@media ${device.tabletS}{
		margin: 0 0 0 40px;
		div{
			font-size: 11px;
			padding: 5px 20px;
		}
	}
`;

export const MobileWrap = styled(NavBar)`
	background: #ffffff;
`;

export const FooterCss = styled.div`
	.logo-wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 60px;
		.social-links{
			list-style: none;
			margin: 40px 0 0 0;
			padding: 0;
			li{
				padding: 0 10px;
				display: inline-block;
				.anticon{
					font-size: 20px;
					color: #828282;
				}
			}
		}
	}
	.extra-content{
		margin-bottom: 30px;
		.head-title{
			font-family: ${(props) => props.theme.headFont};
			font-size: 18px;
			line-height: 24px;
			font-weight: 700;
			color: #334565;
			text-align: center;
			margin-bottom: 20px;
		}
		ul{
			list-style: none;
			padding: 0;
			margin: 0;
			li{
				padding: 5px 0;
				text-align: center;
				a{
					font-family: ${(props) => props.theme.contentFont};
					font-size: 14px;
					line-height: 22px;
					font-weight: 500;
					color: #334565;
					text-align: center;
				}
			}
		}
		.app-download{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.app-link{
				width: fit-content;
				background: #334565;
				padding: 0px 30px;
				border-radius: 6px;
				display: flex;
				justify-content: center;
				align-items: center;
				font-family: ${(props) => props.theme.headFont};
				font-size: 10px;
				line-height: 36px;
				font-weight: 500;
				color: #ffffff;
				.anticon{
					color: #ffffff;
					font-size: 14px;
					margin-right: 7px;
				}
				&:first-child{
					margin-bottom: 10px;
				}
			}
		}
	}
	@media ${device.tablet}{
		.footer-content{
			display: flex;
			justify-content: space-between;
			width: 100%;
		}
		.logo-wrap{
			width: 30%;
			justify-content: flex-start;
			align-items: flex-start;
		}
		.extra-content{
			width: 20%;
			.head-title{
				text-align: left;
			}
			ul{
				li{
					text-align: left;
					a{
						text-align: left;
					}
				}
			}
			.app-download{
				align-items: flex-start;
			}
		}
	}
`;
