import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './select-single.scss';

const SelectSinglePropTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};

const SelectSingleDefaultProps = {
  data: [],
  className: '',
  placeholder: '',
  clearable: false,
  value: '',
  error: '',
  disabled: false
};

class SelectSingle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.toggleOptions = this.toggleOptions.bind(this);
    this.close = this.close.bind(this);
    this.clearSelection = this.clearSelection.bind(this);
  }

  toggleOptions() {
    this.setState((prevState) => {
      return {open: !prevState.open};
    });
  }

  close() {
    if (this.state.open) {
      this.setState({open: false});
    }
  }

  clearSelection() {
    this.handleSelect('');
  }

  handleSelect(value) {
    if (this.props.onSelect) {
      this.props.onSelect(value);
    }
  }

  renderItem(item) {
    const isSelected = item.value === this.props.value;
    return (
      <li key={item.value} className={classnames({selected: isSelected})} onMouseDown={this.handleSelect.bind(this, item.value)}>
        {item.text}
      </li>
    );
  }

  render() {
    const {data, className, placeholder, disabled, clearable, value, error} = this.props;
    const selectedItem = value ? data.filter((item) => { return item.value === value; }) : null;
    const selectedText = selectedItem && selectedItem.length ? selectedItem[0].text : '';

    return (
      <div className={classnames('select-single', className)} tabIndex="0">
        <div className="select-input">
          <input value={selectedText} onClick={this.toggleOptions} onBlur={this.close} disabled={disabled} tabIndex="-1" readOnly />
          {placeholder && !value ? <label>{placeholder}</label> : null}
          {clearable && value ? <a className="clear" onClick={this.clearSelection}><i className="fa fa-times" /></a> : null}
          <span className="select-arrow" />
        </div>
        {error !== '' ? <span className="select-error">{error}</span> : null}
        <ul className={classnames({open: this.state.open})}>
          {data && data.length ? data.map((item) => { return this.renderItem(item); }) : <li>No data found</li>}
        </ul>
      </div>
    );
  }
}

SelectSingle.propTypes = SelectSinglePropTypes;
SelectSingle.defaultProps = SelectSingleDefaultProps;

export default SelectSingle;