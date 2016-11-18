import React, { Component } from 'react';
import XCheck from '../../../../components/checkbox/XCheck';
import XSwitch from '../../../../components/switch/XSwitch';
import { XRadioGroup, XRadioButton } from '../../../../components/radio/XRadio';

import './styles.scss';

class Selectors extends Component {
  constructor() {
    super();

    this.state = { radioValue: 'fightClub' };

    this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this);
  }

  handleRadioButtonChange(radioValue) {
    this.setState({radioValue});
  }

  render() {
    return (
      <div>
        <h2 className="row">CheckBox</h2>
        <div className="row"><XCheck label="Default"/></div>
        <div className="row"><XCheck label="Checked" checked={true}/></div>
        <div className="row"><XCheck label="Disabled" checked={true} disabled={true}/></div>
        <div className="row"><XCheck label="Themed" theme="red"/></div>
        <h2 className="row">Radio Button</h2>
        <div className="row">
          <XRadioGroup name="playtest" value={this.state.radioValue} onChange={this.handleRadioButtonChange}>
            <XRadioButton label="12 Monkeys" value="monkeys12"/>
            <XRadioButton label="Fight Club" value="fightClub" checked={true}/>
            <XRadioButton label="Die Hard" value="dieHard" disabled={true}/>
            <XRadioButton label="Trainspotting" value="trainspotting" theme="red"/>
          </XRadioGroup>
        </div>
        <h2 className="row">Switch</h2>
        <div className="row"><XSwitch label="Default"/></div>
        <div className="row"><XSwitch label="Checked" checked={true}/></div>
        <div className="row"><XSwitch label="Disabled" disabled={true}/></div>
        <div className="row"><XSwitch label="Themed" theme="red"/></div>
      </div>
    );
  }
};

export default Selectors;