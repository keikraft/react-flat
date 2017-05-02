import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Input from '../../../../../src/shared/components/inputs/input/Input.jsx';

describe("Input component", function() {

  const fakeHandleChange = () => {};

  it("triggers onChange method when user types something", function() {
    let changedText = '';
    const typedText = 'I\'m typing!';
    const handleChange = (value) => { changedText = value; };
    const component = mount(<Input onChange={handleChange.bind(this)} value="" />);

    component.find('input').node.value = typedText;
    component.find('input').simulate('change');

    expect(changedText).to.equal(typedText);
  });

  it("renders icon if an icon is passed in props", function() {
    const inputIcon = 'fa-ok';
    const component = shallow(<Input icon={inputIcon} onChange={fakeHandleChange} value="" />);

    expect(component.contains(<span className={`icon fa ${inputIcon}`} />)).to.equal(true);
  });

  it("renders error if an error message is passed in props", function() {
    const inputErrorMessage = 'I\'m an error message!';
    const component = shallow(<Input error={inputErrorMessage} onChange={fakeHandleChange} value="" />);

    expect(component.contains(<span className="error">{inputErrorMessage}</span>)).to.equal(true);
  });
});