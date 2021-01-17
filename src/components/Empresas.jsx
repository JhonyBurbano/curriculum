import React from 'react';
import styled from 'styled-components';

const EmpresasImg = styled.img`
	
	width: 100%;
`;

const Empresas = props => (
	<div className="Empresas">
		<hr />
		{props.data.map((emp, empindex) => (
			<div key={empindex} className="Empresas-container">
				<figure>
					<a href={emp.url} ><EmpresasImg src={emp.logo} alt={emp.name} /></a>
				</figure>
			</div>
		))}
	</div>
);

export default Empresas;