import React from 'react';
import { expect } from 'chai';
import { shallow, } from 'enzyme';
import Switch from '../../../../../src/shared/components/switches/switch/Switch.jsx';

describe("Switch component", function() {
  it("triggers onChange method when clicked on colored side", function() {
    let switchClicked = false;
    const handleChange = () => { switchClicked = !switchClicked; };
    const component = shallow(<Switch active={true} onChange={handleChange.bind(this)} />);

    component.find('span.btn-primary').simulate('click');
    expect(switchClicked).to.equal(true);
  });

  it("triggers onChange method when clicked on white side", function() {
    let switchClicked = false;
    const handleChange = () => { switchClicked = !switchClicked; };
    const component = shallow(<Switch active={true} onChange={handleChange.bind(this)} />);

    component.find('span.btn-white').simulate('click');
    expect(switchClicked).to.equal(true);
  });

  it("does not trigger onChange method when clicked and it's disabled", function() {
    let switchClicked = false;
    const handleChange = () => { switchClicked = !switchClicked; };
    const component = shallow(<Switch active={true} disabled={true} onChange={handleChange.bind(this)} />);

    component.find('span.btn-white').simulate('click');
    expect(switchClicked).to.equal(false);
  });
});