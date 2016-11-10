import React from 'react';
import Link from 'react-router/lib/Link';

let ButtonLink = (props) => {
	const { name, type, url } = props;

	return <Link className={"btn " + type} to={url}>{name}</Link>
}

ButtonLink.propTypes = {
	name: React.PropTypes.string.isRequired,
	type: React.PropTypes.string.isRequired,
	url: React.PropTypes.string.isRequired
}

export default ButtonLink;