import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import Icon from '../Icon/Icon';

describe('Icon component', function () {
  it('should have the icon value passed as prop', function () {
    const iconValue = 'thumb_up';
    const component = shallow(<Icon value={iconValue} />);

    expect(component.find('span.icon').exists()).to.be.true;
    expect(component.find('span.icon').text()).to.be.equal(iconValue);
  });
});