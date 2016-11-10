import React from 'react';

import './inputs.scss';

let TextInput = (props) => {
	const { styles, placeholder, pattern, required, onChange } = props;

	return <input
		type="text"
		className={styles}
		placeholder={placeholder}
		pattern={pattern}
		required={required}
		onChange={onChange}
	/>
}

TextInput.propTypes = {
	styles: React.PropTypes.string,
	placeholder: React.PropTypes.string,
	pattern: React.PropTypes.string,
	required: React.PropTypes.bool,
	onChange: React.PropTypes.func.isRequired
}

export default TextInput;