import React from 'react';

const ExperienceDescrip = props => (
	<div>
	{props.data.map((desc, subindex) => (
		<p key={subindex}><i className="fa fa-check"></i> {desc.name} {desc.url && <a href={desc.url} target="_blank">{desc.url}</a> }</p>
	))}
	</div>
);

export default ExperienceDescrip;