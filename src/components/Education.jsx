import React from 'react';
import styled from 'styled-components';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const EducationItem = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	cursor: pointer;
	&:hover {
		border-radius: 15px;
		background-color: #e6ecf0;
		padding-left: 5px;
	}
`;

const EducationDiv = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
`;

const EducationSpan = styled.span`
	font-weight: 600;
`;

const Education = props => (
	<div className="Education">
		<div className="Education-container">
		<H2Styled name="EDUCACION" /><hr/>
		{props.data.map((edu, index) => (
			<EducationItem key={`Edu-${index}`}>
				<EducationDiv>	
					<H3Styled>{edu.degree}</H3Styled>
					<EducationSpan>{edu.endDate} - {edu.startDate}</EducationSpan>
				</EducationDiv>
				<PStyled name={edu.institution} />
			</EducationItem>
		))}
		</div>
	</div>
);

export default Education;