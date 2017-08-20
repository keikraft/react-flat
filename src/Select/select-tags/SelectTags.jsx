import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {KeyCodesEnum} from 'shared/enums/keyCodes.enum';

const SelectTagsPropTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.string),
  error: PropTypes.string,
  onSelect: PropTypes.func.isRequired
};

const SelectTagsDefaultProps = {
  data: [],
  className: '',
  placeholder: '',
  clearable: false,
  tags: [],
  error: '',
  disabled: false
};

class SelectTags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      writtenTag: ''
    };

    this.inputWidth = 10;
  }

  buildAvailableTags() {
    const {data, tags} = this.props;

    const availableTags = tags && tags.length > 0
      ? data.filter((tag) => { return !tags.includes(tag); })
      : data;

    return this.state.writtenTag !== ''
      ? availableTags.filter((tag) => { return tag.includes(this.state.writtenTag); })
      : availableTags;
  }

  removeLastTag() {
    const tags = this.props.tags.slice(0, this.props.tags.length - 1);
    if (this.props.onSelect) {
      this.props.onSelect(tags);
    }
  }

  handleToggleTagsList = () => {
    this.input.focus();
    this.setState((prevState) => {
      return {open: !prevState.open};
    });
  };

  handleCloseTagsList = () => {
    if (this.state.open) {
      this.setState({open: false, writtenTag: ''});
    }
  };

  handleClearSelection = () => {
    if (this.props.onSelect) {
      this.props.onSelect([]);
    }
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.inputWidth = 10 + (value.length * 5);
    this.setState({writtenTag: value});
  }

  handleKeyDown = (event) => {
    if (event.keyCode === KeyCodesEnum.Enter && this.state.writtenTag !== '') {
      if (!this.props.tags.includes(this.state.writtenTag)) {
        this.handleSelect(this.state.writtenTag);
      }
    } else if (event.keyCode === KeyCodesEnum.Backspace && this.state.writtenTag === '') {
      this.removeLastTag();
    }
  }

  handleRemoveTag(removedTag) {
    const tags = this.props.tags.filter((tag) => { return tag !== removedTag; });
    if (this.props.onSelect) {
      this.props.onSelect(tags);
    }
  }

  handleSelect(selectedTag) {
    const tags = this.props.tags.includes(selectedTag)
      ? this.props.tags.filter((tag) => { return tag !== selectedTag; })
      : this.props.tags.concat([selectedTag]);

    this.setState({writtenTag: ''});
    if (this.props.onSelect) {
      this.props.onSelect(tags);
    }
  }

  renderTag(key, tag) {
    return (
      <div key={key} className="select-tag">
        <span className="select-tag-clear fa fa-times" onClick={this.handleRemoveTag.bind(this, tag)} />
        <span className="select-tag-option" role="option" aria-selected="true">{tag}</span>
      </div>
    );
  }

  renderListTag(key, tag) {
    return <li key={key} onMouseDown={this.handleSelect.bind(this, tag)}>{tag}</li>;
  }

  render() {
    const {open, writtenTag} = this.state;
    const {className, placeholder, disabled, clearable, tags, error} = this.props;

    const availableTags = this.buildAvailableTags();

    return (
      <div className={classnames('select-tags', className)} tabIndex="0">
        <ul className={classnames('select-tags-dropdown', {open})}>
          {writtenTag !== '' ? <li className="selected" onMouseDown={this.handleSelect.bind(this, writtenTag)}>{`Create tag ${writtenTag}`}</li> : null}
          {availableTags && availableTags.map((tag, index) => { return this.renderListTag(index, tag); })}
        </ul>
        <div className="select-tag-values" tabIndex="-1" onClick={this.handleToggleTagsList} onBlur={this.handleCloseTagsList}>
          {tags && tags.map((tag, index) => { return this.renderTag(index, tag); })}
          <div className="select-input">
            <input ref={(input) => { this.input = input; }}
              value={writtenTag}
              disabled={disabled}
              style={{width: `${this.inputWidth}px`, boxSizing: 'content-box'}}
              onChange={this.handleInputChange}
              onKeyDown={this.handleKeyDown} />
          </div>
          {placeholder && writtenTag === '' && tags.length === 0 ? <label>{placeholder}</label> : null}
          {clearable && tags.length > 0 ? <a className="clear" onClick={this.handleClearSelection}><i className="fa fa-times" /></a> : null}
          <span className="select-arrow" />
        </div>
        {error !== '' ? <span className="select-error">{error}</span> : null}
      </div>
    );
  }
}

SelectTags.propTypes = SelectTagsPropTypes;
SelectTags.defaultProps = SelectTagsDefaultProps;

export default SelectTags;