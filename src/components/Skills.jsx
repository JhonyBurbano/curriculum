import React from 'react';
import styled, { keyframes } from 'styled-components';
import H2Styled from '../styled/H2Styled';
import Empresas from './Empresas';

const SkillsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 1em;
	color: #25323b;
`;

const SkillsH5 = styled.h5`
	margin: .5em 0;
`;

const SkillsLine = styled.div`
	height: 8px;
	position: relative;
	border-radius: 50px;
	background: #c2c4d8;
`;

const move = keyframes`
	0% { background-position: 0 0; }
    100% { background-position: 50px 50px; }
`;

const SkillsSpan = styled.span`
	display: block;
	height: 100%;
	width: ${props => props.width};
	border-radius: 50px;
	background-color: #4b4f77;
	position: relative;
	overflow: hidden;
	box-shadow: inset 0 2px 9px rbga(255,255,255, 0.3), inset 0 -2px 6px rgba(0,0,0,0.4);
	&:after{
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-image: linear-gradient(-45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent);
	    z-index: 1;
	    background-size: 50px 50px;
	    animation: ${move} 4s linear infinite;
	    overflow: hidden;
	}
`;

const SkillsItem = styled.div`
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: auto;
`;

const SkillsDiv = styled.div`
	display: grid;
	grid-template-columns: auto 1fr 2fr;
	grid-gap: 2em .5em;
	align-items: center;
`;

const SkillsSpanPor = styled.span`
	text-align: right;
	color: #25323b;
`;

/*
Este codigo css va dentro de SkillsItem

@media (min-width: 40em) {
	    grid-template-columns: 1fr;
	  }
	  &__item {
	    @include card(0.75em 0.5em);
	    display: flex;
	    align-items: center;
	    line-height: 1.2;
	  }
*/

const Skills = props => (
	<div className="Skills">
		<SkillsContainer>
		<H2Styled name="HABILIDADES" />
		{props.data.map((skill, index) => (
			<SkillsItem key={`Ski-${index}`}>
				<SkillsDiv>
				<i className={`fab fa-${skill.minus}`}></i>
				<SkillsH5>{skill.name}</SkillsH5>
				<SkillsSpanPor>{skill.percentage}</SkillsSpanPor>
				</SkillsDiv>
				<SkillsLine>
					<SkillsSpan width={skill.percentage} /> 
				</SkillsLine>
			</SkillsItem>
		))}
		</SkillsContainer>
		<Empresas data={props.empresa} />
	</div>
);

export default Skills;