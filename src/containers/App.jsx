import React from 'react';
import { createGlobalStyle } from 'styled-components'
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import Social from '../components/Social';
import useGetData from '../hooks/useGetData';

const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Lato', sans-serif;
		margin: 0;
		padding: 0;
		background: #fff;
	}
`;

const App = () =>{
	const data = useGetData();
	return data.length === 0 ? <h1>Cargando...</h1> : (
		<Main>
			<GlobalStyle />
			<Sidebar>
				<About 
					avatar={data.avatar}
				 	name={data.name}
				 	profession={data.profession}
				 	bio={data.bio}
				 	address={data.address}
				 	social={data.social}
				/>
				<Social />
			</Sidebar>
			<Info>
				<Education 
					data={data.education}
				/>
				<Experience 
					data={data.experience}
				/>
				<Certificates 
					data={data.certificate}
				/>
			</Info>
			<Skills data={data.skills} />
		</Main>
	);
}

export default App;