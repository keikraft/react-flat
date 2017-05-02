import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ButtonSpinner from '../../../../../src/shared/components/buttons/button-spinner/ButtonSpinner.jsx';

describe("Button Spinner component", function() {
    it("triggers onClick method when clicked", function() {
        let clicked = false;
        const handleClick = () => { clicked = true; };
        const component = shallow(<ButtonSpinner onClick={handleClick} />);

        component.find('button').simulate('click');

        expect(clicked).to.equal(true);
    });

    it("spins when spin prop set to true", function() {
        const handleClick = () => {};
        const component = shallow(<ButtonSpinner onClick={handleClick} spin={true}/>);
        expect(component.contains(<i className={'fa fa-spinner fa-spin'} />)).to.equal(true);
    });

    it("disabled when spin prop set to true", function() {
        const handleClick = () => {};
        const component = shallow(<ButtonSpinner onClick={handleClick} spin={true}/>);
        expect(component.find('button.btn[disabled=true]').exists()).to.equal(true);
    });

    it("disabled when disabled prop set to true", function() {
        const handleClick = () => {};
        const component = shallow(<ButtonSpinner onClick={handleClick} disabled={true}/>);
        expect(component.find('button.btn[disabled=true]').exists()).to.equal(true);
    });

    it("enabled when spin prop not set or set to false", function() {
        const handleClick = () => {};
        // spin prop set to false
        let component = shallow(<ButtonSpinner onClick={handleClick} spin={false}/>);
        expect(component.find('button.btn').exists()).to.equal(true);
        // spin prop not set
        component = shallow(<ButtonSpinner onClick={handleClick}/>);
        expect(component.find('button.btn').exists()).to.equal(true);
    });

    it("enabled when disabled prop not set or set to false", function() {
        const handleClick = () => {};
        // disabled prop set to false
        let component = shallow(<ButtonSpinner onClick={handleClick} disabled={false}/>);
        expect(component.find('button.btn').exists()).to.equal(true);
        // disabled prop not set
        component = shallow(<ButtonSpinner onClick={handleClick}/>);
        expect(component.find('button.btn').exists()).to.equal(true);
    });
});