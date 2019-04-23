import React from 'react';
import styled from 'styled-components';
import H2Styled from '../styled/H2Styled';
import ExperienceDescrip from './ExperienceDescrip';

const ExperienceItem = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	cursor: pointer;
	&:hover {
		border-radius: 15px;
		background-color: #e6ecf0;
		padding-left: 5px;
	}
`;

const ExperienceDiv = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 0 1em;
	align-items: center;
`;

const ExperienceCompa = styled.h3`
	grid-column: 1;
    grid-row: 1;
`;

const ExperienceTitle = styled.div`
	grid-column: 1;
    grid-row: 2;
    color: #757575;
    font-weight: 300;
`;

const ExperienceDate = styled.div`
	grid-column: 2;
    grid-row: 1 / span 2;
    font-weight: 600;
`;



const Experience = props => (
	<div className="Experience">
		<H2Styled name="EXPERIENCIA" /><hr/>
		<div className="Experience-container">
		{props.data.map((exp, index) => (
			<ExperienceItem key={`Exp-${index}`}>
				<ExperienceDiv>
					<ExperienceCompa>{exp.company}</ExperienceCompa>
					<ExperienceTitle>{exp.jobTitle}</ExperienceTitle>
					<ExperienceDate>{exp.endDate} - {exp.startDate}</ExperienceDate>
				</ExperienceDiv>
				<ExperienceDescrip data={exp.jobDescription} />
				
				
			</ExperienceItem>
		))}
		</div>
	</div>
);

export default Experience;