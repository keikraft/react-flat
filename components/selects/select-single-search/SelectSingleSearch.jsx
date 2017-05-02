import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import DelayInput from 'shared/components/inputs/delay-input/DelayInput';

import './select-single-search.scss';

const SelectSingleSearchPropTypes = {
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
  onSelect: PropTypes.func.isRequired,
  onSearchInput: PropTypes.func.isRequired,
};

const SelectSingleSearchDefaultProps = {
  data: [],
  className: '',
  placeholder: '',
  clearable: false,
  value: '',
  error: '',
  disabled: false
};

class SelectSingleSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      searchBoxFocused: false
    };

    this.toggleOptions = this.toggleOptions.bind(this);
    this.close = this.close.bind(this);
    this.clearSelection = this.clearSelection.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  componentDidMount() {
    this.selectOptions.addEventListener('transitionend', (e) => {
      if (e.propertyName === 'transform') {
        this.setState((prevState) => {
          return {searchBoxFocused: !prevState.searchBoxFocused};
        });
      }
    });
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

  handleSearchInput(value) {
    if (this.props.onSearchInput) {
      console.log(value);
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
      <div className={classnames('select-single-search', className)}>
        <div className="select-input">
          <input value={selectedText} onClick={this.toggleOptions} disabled={disabled} readOnly />
          {placeholder && !value ? <label>{placeholder}</label> : null}
          {clearable && value ? <a className="clear" onClick={this.clearSelection}><i className="fa fa-times" /></a> : null}
          <span className="select-arrow" />
        </div>
        {error !== '' ? <span className="select-error">{error}</span> : null}
        <div className={classnames('select-options', {open: this.state.open})} ref={(optionsDiv) => { this.selectOptions = optionsDiv; }}>
          <DelayInput className="search-input" onBlur={this.close} type="text" ref={(input) => { this.textInput = input; }} onChange={this.handleSearchInput} focused={this.state.searchBoxFocused} />
          <ul>
            {data && data.length ? data.map((item) => { return this.renderItem(item); }) : <li>No data found</li>}
          </ul>
        </div>
      </div>
    );
  }
}

SelectSingleSearch.propTypes = SelectSingleSearchPropTypes;
SelectSingleSearch.defaultProps = SelectSingleSearchDefaultProps;

export default SelectSingleSearch;