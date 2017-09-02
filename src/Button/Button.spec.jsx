import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';

import Button, {buttonFactory} from './Button';
import Icon from '../Icon/Icon';

describe('Button component', function () {
  it('should have the text passed as prop', function () {
    const clickMeText = 'Click me';
    const component = mount(<Button text={clickMeText} />);

    const buttonTextNode = component.findWhere((node) => node.type() === 'span' && node.text() === clickMeText);
    expect(buttonTextNode).to.have.length(1);
  });

  it('should have the theme passed as prop', function () {
    const redTheme = 'red';
    const component = mount(<Button theme={redTheme} />);

    expect(component.find('button').hasClass(redTheme)).to.be.true;
  });

  it('should have the className passed as prop', function () {
    const customClassName = 'override-padding';
    const component = mount(<Button className={customClassName} />);

    expect(component.find('button').hasClass(customClassName)).to.be.equal(true);
  });

  it('should be flat button when flat is passed as prop', function () {
    const component = mount(<Button flat />);

    expect(component.find('button').hasClass('flat')).to.be.equal(true);
  });

  it('should be raised button when raised is passed as prop', function () {
    const component = mount(<Button raised />);

    expect(component.find('button').hasClass('raised')).to.be.equal(true);
  });

  it('should be circular button when circular is passed as prop', function () {
    const component = mount(<Button circular />);

    expect(component.find('button').hasClass('circular')).to.be.equal(true);
  });

  it('should be circular inverse button when circular and inverse is passed as prop', function () {
    const component = mount(<Button circular inverse />);

    const buttonElem = component.find('button');
    expect(buttonElem.hasClass('circular')).to.be.equal(true);
    expect(buttonElem.hasClass('inverse')).to.be.equal(true);
  });

  it('should be circular mini button when circular and mini is passed as prop', function () {
    const component = mount(<Button circular mini />);

    const buttonElem = component.find('button');
    expect(buttonElem.hasClass('circular')).to.be.equal(true);
    expect(buttonElem.hasClass('mini')).to.be.equal(true);
  });

  it('should render an icon when passed as prop', function () {
    const iconName = 'thumb_up';
    const component = mount(<Button icon={iconName} />);

    const buttonIconNode = component.findWhere((node) => node.type() === 'span' && node.hasClass('icon') && node.text(iconName));
    expect(buttonIconNode).to.have.length(1);
  });

  it('should add class "icon-text" to text node when icon prop is passed', function () {
    const iconName = 'thumb_up';
    const clickMeText = 'Click me';
    const component = mount(<Button text={clickMeText} icon={iconName} />);

    const buttonIconNode = component.findWhere((node) => node.type() === 'span' && node.hasClass('icon') && node.text(iconName));
    const buttonTextNode = component.findWhere((node) => node.type() === 'span' && node.hasClass('icon-text') && node.text(clickMeText));
    expect(buttonIconNode).to.have.length(1);
    expect(buttonTextNode).to.have.length(1);
  });

  it('should not render an icon if icon prop is not passed', function () {
    const component = mount(<Button text="Test button" />);

    const buttonIconNode = component.findWhere((node) => node.type() === 'span' && node.hasClass('icon'));
    expect(buttonIconNode).to.have.length(0);
  });

  it('should render children', function () {
    const iconName = 'thumb_up';
    const children = <Icon value={iconName} />;
    const component = mount(<Button text="Test button">{children}</Button>);

    const buttonIconChildNode = component.children().filterWhere((node) => node.type() === Icon);
    expect(buttonIconChildNode).to.have.length(1);
  });

  it('should render a wave when clicked', function () {
    const component = mount(<Button />);

    component.find('button').simulate('mousedown');
    const buttonWaveNode = component.children().filterWhere((node) => node.type() === 'span' && node.hasClass('wave'));
    expect(buttonWaveNode).to.have.length(1);
  });

  it('should be waveless when built through the buttonFactory and waveFactory is not passed as parameter', function () {
    const ButtonWaveless = buttonFactory();
    const component = mount(<ButtonWaveless />);

    component.find('button').simulate('mousedown');
    const buttonWaveNode = component.children().filterWhere((node) => node.type() === 'span' && node.hasClass('wave'));
    expect(buttonWaveNode).to.have.length(0);
  });

  it('should call onClick callback method when clicked', function () {
    let clicked = false;
    const handleClick = () => { clicked = true; };
    const component = mount(<Button onClick={handleClick} />);

    component.find('button').simulate('click');

    expect(clicked).to.be.equal(true);
  });

  it('should not call onClick callback method when disabled and clicked', function () {
    let clicked = false;
    const handleClick = () => { clicked = true; };
    const component = mount(<Button disabled={true} onClick={handleClick} />);

    component.find('button').simulate('click');

    expect(clicked).to.be.equal(false);
  });

  it('should call onMouseUp callback method when clicked', function () {
    let mouseUp = false;
    const handleMouseUp = () => { mouseUp = true; };
    const component = mount(<Button onMouseUp={handleMouseUp} />);

    component.find('button').simulate('mouseup');

    expect(mouseUp).to.be.equal(true);
  });

  it('should be enabled when disabled prop not set or set to false', function () {
    let component = mount(<Button disabled={false} />);
    expect(component.find('button').exists()).to.be.equal(true);

    component = mount(<Button />);
    expect(component.find('button').exists()).to.be.equal(true);
  });

  it('should be disabled when disabled prop set to true', function () {
    const handleClick = () => {};
    const component = mount(<Button disabled={true} onClick={handleClick} />);

    expect(component.find('button[disabled=true]').exists()).to.be.equal(true);
  });
});