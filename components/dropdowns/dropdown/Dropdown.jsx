import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import './dropdown.scss';

const DropdownPropTypes = {
  className: PropTypes.string,
  side: PropTypes.string,
  animation: PropTypes.string,
  openOnHover: PropTypes.bool,
  buttonSlot: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onToggle: PropTypes.func
};

const DropdownDefaultProps = {
  className: '',
  side: 'down',
  animation: '',
  openOnHover: false,
  disabled: false,
  children: null,
  onToggle: () => { return null; }
};

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
  }

  toggle() {
    if (!this.props.disabled) {
      this.setState((prevState) => {
        if (this.props.onToggle) {
          this.props.onToggle(!prevState.open);
        }
        return {open: !prevState.open};
      });
    }
  }

  close() {
    if (this.state.open) {
      this.setState({open: false});
      if (this.props.onToggle) {
        this.props.onToggle();
      }
    }
  }

  render() {
    const {className, buttonSlot, side, animation, openOnHover, children} = this.props;

    const dropdownClassNames = classnames('dropdown', className, {'onhover-open': openOnHover});
    const openMode = openOnHover ? {onMouseOver: this.toggle} : {onClick: this.toggle, onBlur: this.close};

    return (
      <div className={dropdownClassNames} {...openMode} tabIndex="0">
        <CSSTransitionGroup transitionName="fade-dropdown" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {buttonSlot}
          {this.state.open || openOnHover ? <ul className={classnames(side, {animated: animation}, animation)}>{children}</ul> : null}
        </CSSTransitionGroup>
      </div>
    );
  }
}

Dropdown.propTypes = DropdownPropTypes;
Dropdown.defaultProps = DropdownDefaultProps;

export default Dropdown;