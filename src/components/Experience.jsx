import React from 'react';

const Experience = props => (
	<div className="Experience">
		<div className="Experience-container">
		{props.data.map((exp, index) => (
			<div className="Experience-item" key={`Exp-${index}`}>
				<h3>{exp.company} - {exp.jobTitle}
					<span>{exp.endDate} - {exp.startDate}</span>
				</h3>
				<p>{exp.jobDescription}</p>
			</div>
		))}
		</div>
	</div>
);

export default Experience;