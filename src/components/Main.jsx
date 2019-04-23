import React from 'react';
import styled from 'styled-components';

const MainStyled = styled.div`
	display: grid;
	grid-template-columns: minmax(auto, auto);
	justify-content: center;
	padding: 1em;
`; 

const MainContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	grid-gap: 2rem;
	grid-row-gap: 0.5em;

	@media only screen and (max-width: 767px) {
		grid-template-columns: 1fr;
	}

	@media screen and (max-width: 320px) {
		grid-template-columns: 1fr;
	}
`;

const Main = ({ children }) => (
	<MainStyled>
		<MainContainer>
			{children}
		</MainContainer>
	</MainStyled>
);

export default Main;