import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './select-multiple.scss';

const SelectMultiplePropTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
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

  handleSelect(affectedItem) {
    const values = this.props.values.includes(affectedItem)
      ? this.props.values.filter((value) => { return value !== affectedItem; })
      : this.props.values.concat([affectedItem]);

    if (this.props.onSelect) {
      this.props.onSelect(values, affectedItem);
    }
  }

  renderItem(item) {
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
            .map((item) => { return item.text; })
      : [];

    return (
      <div className={classnames('select-multiple', className)} tabIndex="0">
        <div className="select-input">
          <input value={selectedValues} onClick={this.toggleOptions} onBlur={this.close} disabled={disabled} tabIndex="-1" readOnly />
          {placeholder && !selectedValues.length ? <label>{placeholder}</label> : null}
          {clearable && selectedValues.length ? <a className="clear" onClick={this.clearSelection}><i className="fa fa-times" /></a> : null}
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

SelectMultiple.propTypes = SelectMultiplePropTypes;
SelectMultiple.defaultProps = SelectMultipleDefaultProps;

export default SelectMultiple;