import React from 'react';
import styled from 'styled-components';
import H2Styled from '../styled/H2Styled';

const CertificatesItem = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	cursor: pointer;
	background-color: #fff;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 14px 0 rgba(0,0,0,0.1);
    box-shadow: 0 2px 14px 0 rgba(0,0,0,0.1);
    border-left: 4px solid #4b6577;
    padding: 8px 16px;
    font-size: 12px;
    line-height: 1.17;
    color: #4a4a4a;
    margin: 0 0 8px 0;
    position: relative;
    &:hover{
    	margin-left: 8px;
    }
`;

const CertificatesDiv = styled.div`
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;
`;

const CertificateEnlace = styled.a`
	display: block;
    position: absolute;
    width: 100%;
    height: 100%;
`;

const CertificatesSpan = styled.span`
	font-weight: 600;
`;

const Certificates = props => (
	<div className="Certificates">
		<H2Styled name="CERTIFICADOS" /><hr/>
		<div className="Certificates-container">
		{props.data.map((cer, index) => (
			<CertificatesItem key={`Cert-${index}`}>
				<CertificatesDiv>
					<h3>{cer.name} / {cer.institution}</h3>
					<CertificatesSpan>{cer.date}</CertificatesSpan>
				</CertificatesDiv>
				<CertificateEnlace href={cer.url} target="_blank"></CertificateEnlace>
			</CertificatesItem>
		))}
		</div>
	</div>
);

export default Certificates;