import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import Box from 'shared/components/boxes/box/Box.jsx';

describe("Box component", function () {
  it("triggers onCollapseToggle method when clicked on collapse icon", function () {
    let collapsed = false;
    const handleCollapse = () => {
      collapsed = !collapsed;
    };
    const component = mount(<Box collapsible collapsed={collapsed} onCollapseToggle={handleCollapse}/>);

    expect(collapsed).to.equal(false);
    expect(component.find('i').hasClass('fa-chevron-up')).to.equal(true);

    component.find('a').simulate('click');
    component.setProps({collapsed: collapsed});

    expect(collapsed).to.equal(true);
    expect(component.find('i').hasClass('fa-chevron-down')).to.equal(true);
    expect(component.find('.box').hasClass('collapsed')).to.equal(true);
  });

  it("triggers onClose method when clicked on close icon", function () {
    let closed = false;
    const handleClose = () => {
      closed = !closed;
    };
    const component = shallow(<Box closable onClose={handleClose}/>);

    component.find('a').simulate('click');
    expect(closed).to.equal(true);
    expect(component.find('.x-box').hasClass('closed')).to.equal(true);
  });

  it("triggers links onClick method when clicked on link icon", function () {
    let clickedCounter = 0;
    const links = [
      {
        id: 1, icon: 'test-icon', active: true,
        onClick: () => {
          clickedCounter += 1;
        }
      }
    ];

    const component = shallow(<Box links={links}/>);
    component.find('div.box-tools > a').simulate('click');
    expect(clickedCounter).to.equal(1);
  });
});