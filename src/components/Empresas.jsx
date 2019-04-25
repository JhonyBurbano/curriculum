import React from 'react';
import styled from 'styled-components';

const EmpresasImg = styled.img`
	padding-top: 20px;
	width: 100%;
`;

const Empresas = props => (
	<div className="Empresas">
		<hr />
		<div className="Empresas-container">
			{props.data.map((emp, empindex) => (
				<div key={empindex}>
					<div>
						<figure>
							<a href={emp.url} ><EmpresasImg src={emp.logo} alt={emp.name} /></a>
						</figure>
					</div>
				</div>
			))}
		</div>
	</div>
);

export default Empresas;