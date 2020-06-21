import styled from 'styled-components';

export const ActivityWrap = styled.div`
	background: #fff;
	padding 0 10px;
	width: 100%;
	margin: 0 auto;
	max-width: 360px;
	position: relative;
	border-radius: 20px;
	.text-detail{
		position: absolute;
		width: 100%;
		text-align: center;
		bottom: 10px;
		left: 0;
		h3{
			font-family: ${props => props.theme.headFont};
			font-weight: 800;
			font-size: 24px;
			color: #fff;
			text-transform: uppercase;
		}
	}
`;
