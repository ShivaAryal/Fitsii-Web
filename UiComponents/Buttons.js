import styled from 'styled-components';

export const CustomButton = styled.div`
	font-size: ${(props) => props.size || '10px'};
	font-weight: ${(props) => props.fw || 'normal'};
	padding: ${(props) => props.pd || '8px 20px'};
	text-transform: uppercase;
	width: fit-content;
	cursor: pointer;
	text-align: center;
	background: ${(props) => props.bgColor || '#2D2D2D'};
	border-radius: 20px;
	margin: ${(props) => props.mg || '0 auto'};
	
	/* Color the border and text with theme.main */
	font-family: ${(props) => props.theme.headFont};
	color: ${(props) => props.textColor || '#ffffff'};
	border: 2px solid ${(props) => props.borderColor || '#2D2D2D'};
`;

export const SquareButton = styled(CustomButton)`
	border-radius: 2px;
`;

export const MoreButton = styled(CustomButton)`
	box-shadow: 0px 10px 30px 0 rgba(0, 129, 255, 0.5);
	background: ${(props) => props.theme.primaryColor};
	margin: ${(props) => props.mg || '0 auto'};
	color: #fff;
	font-size: 10px;
	border-radius: 50px;
	font-weight: bold;
	padding: ${(props) => props.pd || '15px 40px'};
	border: none;
`;
