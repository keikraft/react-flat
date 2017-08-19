import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '../Icon/Icon';

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };

    this.selectValue = this.checkValueIsArray(props.value);
  }

  componentWillReceiveProps(nextProps) {
    this.selectValue = this.checkValueIsArray(nextProps.value);
  }

  checkValueIsArray(value) {
    return value && value.constructor === Array ? value : [value];
  }

  handleToggleOptions = () => {
    this.setState({dropdownOpen: true});
  };

  handleClose = () => {
    if (this.state.dropdownOpen) {
      this.setState({dropdownOpen: false});
    }
  };

  handleSelect = (selectedValue) => {
    const {single, multiple, onSelect} = this.props;

    if (single && onSelect) {
      this.props.onSelect(selectedValue);
    } else if (multiple && onSelect) {
      const values = this.selectValue.includes(selectedValue)
        ? this.selectValue.filter((value) => { return value !== selectedValue; })
        : this.selectValue.concat([selectedValue]);

      this.props.onSelect(values, selectedValue);
    }
  };

  handleRemoveValue = (removedValue, event) => {
    event.stopPropagation();
    const {single, multiple, onSelect} = this.props;

    if (single && onSelect) {
      this.props.onSelect(null);
    } else if (multiple && onSelect) {
      const values = this.selectValue.filter((value) => { return value !== removedValue; });
      this.props.onSelect(values, removedValue);
    }
  };

  renderClearButton(item) {
    return (
      <button className="select-value-clear" onClick={this.handleRemoveValue.bind(this, item.value)}>
        <Icon value="clear" />
      </button>
    );
  }

  renderValueItem(key, item) {
    return (
      <div key={key} className="select-value">
        <span role="option" className="select-value-item" aria-selected="true">{item.text}</span>
        {this.props.clearable ? this.renderClearButton(item) : null}
      </div>
    );
  }

  renderListItem(item) {
    const isSelected = this.selectValue.includes(item.value);
    return (
      <li key={item.value} className={classnames({selected: isSelected})} onMouseDown={this.handleSelect.bind(this, item.value)}>
        {item.text}
      </li>
    );
  }

  render() {
    const {dropdownOpen} = this.state;
    const {data, className, theme, placeholder, multiple, disabled, value, error} = this.props;

    const selectedItems = this.selectValue && this.selectValue.length > 0
      ? data.filter((item) => { return this.selectValue.includes(item.value); })
      : [];

    return (
      <div className={classnames('select', className, theme, {multiple, disabled})} tabIndex="0">
        <div role="presentation" className="select-values" tabIndex="-1" onClick={this.handleToggleOptions} onBlur={this.handleClose}>
          {selectedItems.map((item, index) => { return this.renderValueItem(index, item); })}
          {placeholder && value.length === 0 ? <span className="select-placeholder">{placeholder}</span> : null}
          <span className="select-arrow" />
        </div>
        {error !== '' ? <span className="select-error">{error}</span> : null}
        <ul ref={(options) => { this.selectOptions = options; }} tabIndex="-1" className={classnames('select-dropdown', {open: dropdownOpen})} onBlur={this.handleClose}>
          {data && data.length ? data.map((item) => { return this.renderListItem(item); }) : <li>No data</li>}
        </ul>
      </div>
    );
  }
}

Select.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
      ]).isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  className: PropTypes.string,
  theme: PropTypes.string,
  placeholder: PropTypes.string,
  single: PropTypes.bool,
  multiple: PropTypes.bool,
  clearable: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.arrayOf([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool
    ])
  ]),
  error: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};

Select.defaultProps = {
  data: [],
  className: '',
  theme: 'grey',
  placeholder: '',
  single: false,
  multiple: false,
  clearable: false,
  value: null,
  error: '',
  disabled: false
};

export default Select;