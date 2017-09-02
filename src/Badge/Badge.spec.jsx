import React from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';

import Badge from './Badge';
import Icon from '../Icon/Icon';

describe('Badge component', function() {
  it('should render the text passed in props', function() {
    const badgeText = 'Works!';
    const component = shallow(<Badge text={badgeText} />);

    const badgeTextNode = component.findWhere((node) => (node.type() === 'span' && node.hasClass('badge-text')));
    expect(badgeTextNode.text()).to.be.equal(badgeText);
  });

  it('should have the theme class that was passed in props', function () {
    const badgeText = 'Works!';
    const badgeTheme = 'green';
    const component = shallow(<Badge text={badgeText} theme={badgeTheme} />);

    const badgeWrapperNode = component.find('div.badge');
    const badgeTextNode = component.findWhere((node) => (node.type() === 'span' && node.hasClass('badge-text')));

    expect(badgeTextNode.text()).to.be.equal(badgeText);
    expect(badgeWrapperNode.hasClass(`badge-${badgeTheme}`)).to.be.true;
  });

  it('should have inverse class when inverse is passed in props', function () {
    const component = shallow(<Badge inverse />);

    const badgeWrapperNode = component.find('div.badge');
    expect(badgeWrapperNode.hasClass('inverse')).to.be.true;
  });

  it('should have small class when small is passed in props', function () {
    const component = shallow(<Badge small />);

    const badgeWrapperNode = component.find('div.badge');
    expect(badgeWrapperNode.hasClass('badge-small')).to.be.true;
  });

  it('should renders an icon when icon is passed in props', function() {
    const badgeIcon = 'thumb_up';
    const component = mount(<Badge icon={badgeIcon} />);

    const badgeIconNode = component.findWhere((node) => (node.type() === Icon));

    expect(badgeIconNode).to.have.length(1);
    expect(badgeIconNode.text()).to.be.equal(badgeIcon);
    expect(badgeIconNode.hasClass('badge-icon')).to.be.true;
  });

  it('should add "has-icon" class to badge\'s text when icon is passed in props', function() {
    const badgeText = 'Works!';
    const badgeIcon = 'thumb_up';
    const component = mount(<Badge text={badgeText} icon={badgeIcon} />);

    const badgeTextNode = component.findWhere((node) => (node.type() === 'span' && node.hasClass('badge-text')));
    expect(badgeTextNode.text()).to.be.equal(badgeText);
    expect(badgeTextNode.hasClass('has-icon')).to.be.true;
  });

  it('should add "has-icon" and "right" classes to badge\'s text when icon and iconRight are passed in props', function() {
    const badgeText = 'Works!';
    const badgeIcon = 'thumb_up';
    const component = mount(<Badge iconRight text={badgeText} icon={badgeIcon} />);

    const badgeTextNode = component.findWhere((node) => (node.type() === 'span' && node.hasClass('badge-text')));
    expect(badgeTextNode.text()).to.be.equal(badgeText);
    expect(badgeTextNode.hasClass('has-icon')).to.be.true;
    expect(badgeTextNode.hasClass('right')).to.be.true;
  });

  it('should renders the icon on text\'s left when iconRight isn\'t passed in props', function() {
    const badgeText = 'Works!';
    const badgeIcon = 'thumb_up';
    const component = mount(<Badge text={badgeText} icon={badgeIcon} />);

    const badgeWrapperNode = component.find('div.badge');
    expect(badgeWrapperNode.childAt(0).type()).to.be.equal(Icon);
    expect(badgeWrapperNode.childAt(1).type()).to.be.equal('span');
  });

  it('should renders the icon on text\'s right when iconRight is passed in props', function() {
    const badgeText = 'Works!';
    const badgeIcon = 'thumb_up';
    const component = mount(<Badge iconRight text={badgeText} icon={badgeIcon} />);

    const badgeWrapperNode = component.find('div.badge');
    expect(badgeWrapperNode.childAt(0).type()).to.be.equal('span');
    expect(badgeWrapperNode.childAt(1).type()).to.be.equal(Icon);
  });
});