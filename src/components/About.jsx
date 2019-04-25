import React from 'react';
import Social from './Social'
import styled from 'styled-components'

const AboutStyle = styled.div`
	color: #fff;
	text-align: center;
	padding: 0 5px 5px 5px;
`; 

const AboutImg = styled.img`
	border-radius: 100%;
	width: 160px;
	height: 160px;
	border: 2px solid #fff;
	margin: 0 auto;
	display: block;
	box-shadow: 0 0 10px rbga(0, 0, 0, 0.6)
`;

const AboutName = styled.div`
	text-align: center;
`;

const AboutH2 = styled.h2`
	font-family: 'Roboto', sans-serif;
	font-weight: 600;
	letter-spacing: 1.2px;
	margin: .5em 0 0 0;
	color: #fff;
`;

const AboutProfession = styled.p`
	margin: .2em 0 1em 0;
	letter-spacing: 1.6px;
	font-weight: 300;
	color: #fff;
`;

const AboutBio = styled.div`
	font-size: 1em;
	font-weight: 300;
	text-align: justify;
`;

const AboutLocation = styled.div`
	font-size: 1em;
	font-weight: 300;
`;

const AboutUl = styled.div`
    list-style: none; 
	font-weight: 300;
    padding: 0;
    margin-bottom: 1em;
    text-align: justify;
    text-shadow: 0 1px 0 rgba(255,255,255,.5);
`;

const AboutLi = styled.div`
    padding: 0 0 5px 0;
`;

const About = ({ avatar, name, profession, email, telephone, bio, address, social }) => (
	<AboutStyle>
		<div className="About-container">
			<div>
				<figure>
					<AboutImg src={avatar} alt={name} />
				</figure>
			</div>
			<AboutName>
				<AboutH2>{name}</AboutH2>
			</AboutName>
			<AboutProfession>
				{profession}
			</AboutProfession>
			<hr/>
				<span>{telephone}</span><br/>
				<span>{email}</span>
				<AboutLocation>
					<span>{address}</span>
				</AboutLocation>
			<hr/>
			<AboutBio>
				<p>{bio}</p>
			</AboutBio>
			<AboutUl>
				<AboutLi><i className="fa fa-check"></i>Manejo de Bases de Datos SQL Server, MSQL</AboutLi>
				<AboutLi><i className="fa fa-check"></i>Manejo de Lenguaje Php, Javascript, Jquery, Ajax</AboutLi>
				<AboutLi><i className="fa fa-check"></i>Manejo de Framework Cakephp, Laravel, Bootstrap</AboutLi>
				<AboutLi><i className="fa fa-check"></i>Administración Cpanel (Hosting) en servidores linux</AboutLi>
				<AboutLi><i className="fa fa-check"></i>Habilidad para trabajar con equipos interdisciplinarios en la evaluación, formulación, y
desarrollo de proyectos.</AboutLi>
				<AboutLi><i className="fa fa-check"></i>Diseño Web HTML, HTML5, Css </AboutLi>
			</AboutUl>
			<div className="About-social">
				<Social social={social} />
			</div>
		</div>
	</AboutStyle>
)

export default About;