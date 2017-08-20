import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './select-multiple.scss';

const SelectMultiplePropTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
  values: PropTypes.arrayOf(PropTypes.string),
  error: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};

const SelectMultipleDefaultProps = {
  data: [],
  className: '',
  placeholder: '',
  clearable: false,
  values: [],
  error: '',
  disabled: false
};

class SelectMultiple extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleToggleOptions = () => {
    if (!this.props.disabled) {
      this.setState((prevState) => {
        return {open: !prevState.open};
      });
    }
  };

  handleClose = () => {
    if (this.state.open) {
      this.setState({open: false});
    }
  };

  handleSelect(selectedValue) {
    const values = this.props.values.includes(selectedValue)
      ? this.props.values.filter((value) => { return value !== selectedValue; })
      : this.props.values.concat([selectedValue]);

    if (this.props.onSelect) {
      this.props.onSelect(values, selectedValue);
    }
  }

  handleRemoveValue(removedValue, event) {
    event.stopPropagation();
    const values = this.props.values.filter((value) => { return value !== removedValue; });
    if (this.props.onSelect) {
      this.props.onSelect(values, removedValue);
    }
  }

  renderValueItem(key, item) {
    return (
      <div key={key} className="select-value">
        <span className="select-value-clear fa fa-times" onClick={this.handleRemoveValue.bind(this, item.value)} />
        <span role="option" aria-selected="true">{item.text}</span>
      </div>
    );
  }

  renderListItem(item) {
    const isSelected = this.props.values.includes(item.value);
    return (
      <li key={item.value} className={classnames({selected: isSelected})} onMouseDown={this.handleSelect.bind(this, item.value)}>
        {item.text}
      </li>
    );
  }

  render() {
    const {data, className, placeholder, disabled, clearable, values, error} = this.props;
    const selectedValues = values && values.length > 0
      ? data.filter((item) => { return values.includes(item.value); })
      : [];

    return (
      <div className={classnames('select-multiple', className, {disabled})} tabIndex="0">
        <ul className={classnames('select-multiple-dropdown', {open: this.state.open})}>
          {data && data.length ? data.map((item) => { return this.renderListItem(item); }) : <li>No data found</li>}
        </ul>
        <div className="select-multiple-values" tabIndex="-1" onClick={this.handleToggleOptions} onBlur={this.handleClose}>
          {selectedValues.map((item, index) => { return this.renderValueItem(index, item); })}
          {placeholder && values.length === 0 ? <label>{placeholder}</label> : null}
          {clearable && values.length > 0 ? <a className="clear" onClick={this.clearSelection}><i className="fa fa-times" /></a> : null}
          <span className="select-arrow" />
        </div>
        {error !== '' ? <span className="select-error">{error}</span> : null}
      </div>
    );
  }
}

SelectMultiple.propTypes = SelectMultiplePropTypes;
SelectMultiple.defaultProps = SelectMultipleDefaultProps;

export default SelectMultiple;