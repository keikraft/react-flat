import React from 'react';
import XSwitch from '../../../components/selectors/XSwitch';

var Selectors = (props) => {
  return (
    <div>
      <div><XSwitch/></div>
      <div><XSwitch label="Themed" theme="red"/></div>
      <div><XSwitch label="Checked" checked={true}/></div>
      <div><XSwitch label="Disabled" disabled={true}/></div>
    </div>
  );
};

export default Selectors;