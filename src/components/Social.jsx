import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const SocialStyled = styled.div`
	margin: 0 auto;
	display: block;
`;

const SocialUlStyled = styled.ul`
	list-style-type: none;
`;

const SocialLiStyled = styled.li`
	display: inline;
	border-radius: 100%;
	background: #fff;
	padding: 6px;
	margin: 0 1em 0 0;
`;

const SocialAnchor = styled.a`
	color: #212121;
	text-decoration: none;
	font-size: 1.2em;
`;

const SocialIcon = styled.i`
	color: ${props => props.theme.color}
`;

const facebook = {
	color: "#3B5998"
}

const twitter = {
	color: "#38A1F3"
}

const linkedin = {
	color: "#0E76A8"
}

const github = {
	color: "#333"
}

const colors = {
	facebook: "#3B5998",
	twitter: "#38A1F3",
	linkedin: "#0E76A8",
	github: "#333",
	default: "#0000"
}

const getColor = name => ({
	color: colors[name] || colors.default,
	/*
	if(name === 'facebook') return facebook;
	if(name === 'twitter') return twitter;
	if(name === 'linkedin') return linkedin;
	if(name === 'github') return github;
	*/
})

const Social = props => (
	<SocialStyled>
		<div className="Social-container">
		{props.social &&
			<SocialUlStyled>
				{props.social.map((item, index) => (
					<SocialLiStyled key={`social-${index}`}>
						<SocialAnchor href={item.url} target="_blank">
							<ThemeProvider theme={getColor(item.name)}>
								<SocialIcon className={`fab fa-${item.name}`} />
							</ThemeProvider>
						</SocialAnchor>
					</SocialLiStyled>
				))}
			</SocialUlStyled>
		}
		</div>
	</SocialStyled>
);

export default Social;