import React from 'react';
import XCheck from '../../../../components/checkbox/XCheck';
import XSwitch from '../../../../components/switch/XSwitch';
import { XRadioGroup, XRadioButton } from '../../../../components/radio/XRadio';

import './styles.scss';

var Selectors = (props) => {
  return (
    <div>
      <h2 className="row">CheckBox</h2>
      <div className="row"><XCheck label="Default"/></div>
      <div className="row"><XCheck label="Checked" checked={true}/></div>
      <div className="row"><XCheck label="Disabled" checked={true} disabled={true}/></div>
      <div className="row"><XCheck label="Themed" theme="red"/></div>
      <h2 className="row">Radio Button</h2>
      <div className="row">
        <XRadioGroup name="playtest">
          <XRadioButton label="Default"/>
          <XRadioButton label="Checked" checked={true}/>
          <XRadioButton label="Disabled" checked={true} disabled={true}/>
          <XRadioButton label="Themed" theme="red"/>
        </XRadioGroup>
      </div>
      <h2 className="row">Switch</h2>
      <div className="row"><XSwitch label="Default"/></div>
      <div className="row"><XSwitch label="Checked" checked={true}/></div>
      <div className="row"><XSwitch label="Disabled" disabled={true}/></div>
      <div className="row"><XSwitch label="Themed" theme="red"/></div>
    </div>
  );
};

export default Selectors;