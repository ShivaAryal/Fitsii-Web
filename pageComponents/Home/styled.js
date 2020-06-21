import styled from 'styled-components';

export const ActivitySection = styled.div`
	background: #fff;
	.activities-wrap{
		display: flex;
		> div{
			&:first-child{
				padding-left: 0;
			}
			&:second-child{
				padding-right: 0;
			}
		}
	}
`;

export const OnlineClassSection = styled.div`
	background: #fff;
	.activities-wrap{
		display: flex;
		> div{
			&:first-child{
				padding-left: 0;
			}
			&:second-child{
				padding-right: 0;
			}
		}
	}
`;

export const TraineeChoiceSection = styled.div`
	margin-bottom: 100px;
	position: relative;
	z-index: 1;
	`;

export const TopInstructorsSection = styled.div`
	position: relative;
	z-index: 1;
`;
