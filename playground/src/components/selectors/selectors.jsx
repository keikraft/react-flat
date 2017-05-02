import React from 'react';

import XCheck from '../../../../components/checkbox/XCheck';
import XSwitch from '../../../../components/switch/XSwitch';
import {XRadioGroup, XRadioButton} from '../../../../components/radio/XRadio';

import './pageStyles.scss';

class Selectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: 'fightClub'
    };

    this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this);
  }

  handleRadioButtonChange(radioValue) {
    this.setState({radioValue});
  }

  render() {
    return (
      <div>
        <h2 className="row">CheckBox</h2>
        <div className="row"><XCheck label="Default" /></div>
        <div className="row"><XCheck label="Checked" checked /></div>
        <div className="row"><XCheck label="Disabled" checked disabled /></div>
        <div className="row"><XCheck label="Themed" theme="red" /></div>
        <h2 className="row">Radio Button</h2>
        <div className="row">
          <XRadioGroup name="playtest" value={this.state.radioValue} onChange={this.handleRadioButtonChange}>
            <XRadioButton label="12 Monkeys" value="monkeys12" />
            <XRadioButton label="Fight Club" value="fightClub" checked />
            <XRadioButton label="Die Hard" value="dieHard" disabled />
            <XRadioButton label="Trainspotting" value="trainspotting" theme="red" />
          </XRadioGroup>
        </div>
        <h2 className="row">Switch</h2>
        <div className="row"><XSwitch label="Default" /></div>
        <div className="row"><XSwitch label="Checked" checked /></div>
        <div className="row"><XSwitch label="Disabled" disabled /></div>
        <div className="row"><XSwitch label="Themed" theme="red" /></div>
      </div>
    );
  }
}

export default Selectors;