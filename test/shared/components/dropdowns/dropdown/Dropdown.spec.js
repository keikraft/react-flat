import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Dropdown from '../../../../../src/shared/components/dropdowns/dropdown/Dropdown.jsx';

describe("Dropdown component", function () {
    it("triggers toggle on mouseover and OpenOnHover is set as true", function () {
        let dropdownToggled = false;
        const handleToggle = () => {
            dropdownToggled = true
        };

        const component = shallow(<Dropdown buttonSlot={(<button>Test Button</button>)} openOnHover={true} onToggle={handleToggle}/>);

        expect(component.props().onToggle).to.be.defined;
        component.find('div').simulate('mouseover');

        expect(dropdownToggled).to.equal(true);
    });

    it("does NOT trigger toggle on mouseover and OpenOnHover is set as false", function () {
        let dropdownToggled = false;
        const handleToggle = () => {
            dropdownToggled = true
        };

        const component = shallow(<Dropdown buttonSlot={(<button>Test Button</button>)} openOnHover={false} onToggle={handleToggle}/>);

        expect(component.props().onToggle).to.be.defined;
        component.find('div').simulate('mouseover');

        expect(dropdownToggled).to.equal(false);
    });

    it("triggers toggle on click", function () {
        let dropdownToggled = false;
        const handleToggle = () => {
            dropdownToggled = true
        };

        const component = shallow(<Dropdown buttonSlot={(<button>Test Button</button>)} onToggle={handleToggle}/>);

        expect(component.props().onToggle).to.be.defined;
        component.find('div').simulate('click');

        expect(dropdownToggled).to.equal(true);
    });

    it("triggers toggle on blur and open state is set to false", function () {
        let dropdownToggled = false;
        const handleToggle = () => {
            dropdownToggled = !dropdownToggled;
        };

        const component = shallow(<Dropdown buttonSlot={(<button>Test Button</button>)} onToggle={handleToggle}/>);
        expect(component.props().onToggle).to.be.defined;

        // Click the dropdown to open it
        component.find('div').simulate('click');
        expect(dropdownToggled).to.equal(true);
        expect(component.state().open).to.equal(true);

        // Blur the dropdown to close it
        component.find('div').simulate('blur');
        expect(dropdownToggled).to.equal(false);
        expect(component.state().open).to.equal(false);
    });
});