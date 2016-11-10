import React from 'react';
import 'styles.scss';

class Button extends React.Component {
	propTypes: {
		name: React.PropTypes.string.isRequired,
		handleClick: React.PropTypes.func
	}

	constructor(props) {
		super(props)

		this.state = {clicked: false};

		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState({clicked: true});
	}

	render() {
		const { name, handleClick } = this.props;
		const loadingIcon = <i className="fa fa-spinner fa-spin"/>;

		return (<button onClick={this.onClick}>{this.state.clicked ? loadingIcon : name}</button>);
	}
}

export default Button;