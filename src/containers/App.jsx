import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components'
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

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;

const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Lato', sans-serif;
		margin: 0;
		padding: 0;
		background: #fff;
		animation: ${fadeIn} 3s;
	}
	.Sidebar{
		background: #4b6577;
		border-radius: 4px;
		webkit-box-shadow: 3px 0px 6px 0px rgba(140,140,140,1);
		-moz-box-shadow: 3px 0px 6px 0px rgba(140,140,140,1);
		box-shadow: 3px 0px 6px 0px rgba(140,140,140,1);
	}
`;

const movim = keyframes`
	0% { transform: rotate(0deg); }
  	100% { transform: rotate(360deg); }
`;

const LoaderStyle = styled.div`
	position: fixed;
  	top: 50%;
  	left: 45%;
	border: 16px solid #f3f3f3;
	border-radius: 50%;
	border-top: 16px solid #4b6577;
	width: 100px;
	height: 100px;
	-webkit-animation: spin 2s linear infinite; /* Safari */
	animation: ${movim} 3s linear infinite;
`;

const App = () =>{
	const data = useGetData();
	return data.length === 0 ? <LoaderStyle /> : (
		<Main>
			<GlobalStyle />
			<Sidebar>
				<About 
					avatar={data.avatar}
				 	name={data.name}
				 	profession={data.profession}
				 	email={data.email}
				 	telephone={data.telephone}
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
			<Skills data={data.skills} empresa={data.empresas}/>
		</Main>
	);
}

export default App;