import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import TabsBox from '../../../../../src/shared/components/boxes/tabs-box/TabsBox.jsx';

describe("TabsBox component", function () {
  it("triggers onTabClose method when clicked on a tab close icon", function () {
    let closed = false;
    const handleClose = () => {
      closed = !closed;
    };
    const tabs = [{id: 1, active: true, closable: true}];

    const component = shallow(<TabsBox onTabClose={handleClose} tabs={tabs}/>);
    component.find('a.close-tab').simulate('click');
    expect(closed).to.equal(true);
  });

  it("triggers onTabClick method when clicked on a NOT active tab", function () {
    let clicked = false;
    const handleClick = () => {
      clicked = true;
    };
    const tabs = [{id: 1, active: false, closable: false}];

    const component = shallow(<TabsBox onTabClick={handleClick} tabs={tabs}/>);
    component.find('a[role="tab"]').simulate('click');
    expect(clicked).to.equal(true);
  });

  it("renders single tab children", function () {
    const tabs = [{id: 1, active: false, closable: false, children: <div>TEST</div>}];

    const component = shallow(<TabsBox onTabClick={null} tabs={tabs}/>);
    expect(component.contains(<div>TEST</div>)).to.equal(true);
  });

  it("renders multiple tabs children", function () {
    const tabs = [{id: 1, active: false, closable: false, children: <div>TEST_1</div>},
                  {id: 1, active: false, closable: false, children: <div>TEST_2</div>}];

    const component = shallow(<TabsBox onTabClick={null} tabs={tabs}/>);
    expect(component.contains(<div>TEST_1</div>)).to.equal(true);
    expect(component.contains(<div>TEST_2</div>)).to.equal(true);
  });
});
