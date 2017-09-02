import React from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';

import Input from './Input';
import Icon from '../Icon/Icon';

describe('Input component', function() {
  it('should have the type passed as prop', function () {
    const inputType = 'password';
    const component = shallow(<Input type={inputType} />);

    expect(component.find(`input[type="${inputType}"]`).exists()).to.be.true;
  });

  it('should have the name passed as prop', function () {
    const inputName = 'username';
    const component = shallow(<Input name={inputName} />);

    expect(component.find(`input[name="${inputName}"]`).exists()).to.be.true;
  });

  it('should have the className passed as prop', function () {
    const inputClassName = 'custom-class';
    const component = shallow(<Input className={inputClassName} />);

    expect(component.find('div.input').hasClass(inputClassName)).to.be.true;
  });

  it('should have the theme passed as prop', function () {
    const inputTheme = 'red';
    const component = shallow(<Input theme={inputTheme} />);

    expect(component.find('div.input').hasClass(inputTheme)).to.be.true;
  });

  it('should be floating when floating is passed as prop', function () {
    const component = shallow(<Input floating />);

    expect(component.find('div.input').hasClass('floating')).to.be.true;
  });

  it('should have value when value is passed as prop', function () {
    const inputValue = 'email@foo.com!';
    const component = shallow(<Input value={inputValue} />);

    const inputElemNode = component.find('input');
    expect(inputElemNode.props()).to.have.property('value', inputValue);
  });

  it('should be disabled when disabled is passed as prop', function () {
    const component = shallow(<Input disabled />);

    expect(component.find('div.input').hasClass('disabled')).to.be.true;
    expect(component.find('input[disabled]').exists()).to.be.true;
  });

  it('should not allow typing when disabled is passed as prop', function () {
    const typedText = 'I\'m typing!';
    const component = mount(<Input disabled />);

    component.find('input').node.value = typedText;
    component.find('input').simulate('change');

    const inputElemNode = component.find('input');
    expect(inputElemNode.props()).to.have.property('value', '');
  });

  it('should renders an icon when icon is passed in props', function() {
    const inputIcon = 'thumb_up';
    const component = mount(<Input icon={inputIcon} />);

    const inputIconNode = component.findWhere((node) => (node.type() === Icon));
    expect(inputIconNode).to.have.length(1);
    expect(inputIconNode.text()).to.be.equal(inputIcon);
  });

  it('should renders an icon with specific iconFont when iconFont is passed in props', function() {
    const inputIcon = 'fa-ok';
    const inputIconFont = 'fa';
    const component = mount(<Input iconFont={inputIconFont} icon={inputIcon} />);

    const inputIconNode = component.findWhere((node) => (node.type() === Icon));
    expect(inputIconNode).to.have.length(1);
    expect(inputIconNode.hasClass(inputIconFont)).to.be.true;
    expect(inputIconNode.text()).to.be.equal(inputIcon);
  });

  it('should add specific class to input element when icon is passed in props', function() {
    const inputIcon = 'thumb_up';
    const component = shallow(<Input icon={inputIcon} />);

    expect(component.find('input').hasClass('with-icon')).to.be.true;
  });

  it('should add specific class to placeholder element when icon and placeholder are passed in props', function() {
    const inputPlaceholder = 'placeholder';
    const inputIcon = 'thumb_up';
    const component = shallow(<Input placeholder={inputPlaceholder} icon={inputIcon} />);

    const inputLabelElemNode = component.find('label');
    expect(inputLabelElemNode.hasClass('with-icon')).to.be.true;
    expect(inputLabelElemNode.text()).to.be.equal(inputPlaceholder);
  });

  it('should render a label placeholder element when placeholder is passed in props', function() {
    const inputPlaceholder = 'placeholder';
    const component = shallow(<Input placeholder={inputPlaceholder} />);

    const inputLabelElemNode = component.find('label');
    expect(inputLabelElemNode.exists()).to.be.true;
    expect(inputLabelElemNode.text()).to.be.equal(inputPlaceholder);
  });

  it('should renders error message when error message is passed in props', function() {
    const inputErrorMessage = 'I\'m an error message!';
    const component = shallow(<Input error={inputErrorMessage} />);

    expect(component.contains(<span className="error">{inputErrorMessage}</span>)).to.equal(true);
  });

  it('should triggers onChange method when user types something', function() {
    let changedText = '';
    const typedText = 'I\'m typing!';
    const handleChange = (value) => { changedText = value; };
    const component = mount(<Input value="" onChange={handleChange} />);

    const inputElemNode = component.find('input');
    inputElemNode.node.value = typedText;
    inputElemNode.simulate('change');

    expect(changedText).to.be.equal(typedText);
  });
});