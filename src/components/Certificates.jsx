import React from 'react';
import H2Styled from '../styled/H2Styled';

const Certificates = props => (
	<div className="Certificates">
		<H2Styled name="CERTIFICADOS" /><hr/>
		<div className="Certificates-container">
		{props.data.map((cer, index) => (
			<div className="Certificates-item" key={`Cert-${index}`}>
				<h3>{cer.name} / {cer.institution}
					<span>{cer.date}</span>
				</h3>
				<p>{cer.description}</p>
			</div>
		))}
		</div>
	</div>
);

export default Certificates;