import React, { Component } from 'react';
import XButton from '../../../../components/button/XButton';
import { XRadioGroup, XRadioButton } from '../../../../components/radio/XRadio';

import './pageConfig.scss';

class Toaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasterSide: 'right',
      toasterPosition: 'top',
      toasterType: 'info'
    };

    this.handleToasterSideButtonChange = this.handleToasterSideButtonChange.bind(this);
    this.handleToasterPositionButtonChange = this.handleToasterPositionButtonChange.bind(this);
    this.handleToasterTypeButtonChange = this.handleToasterTypeButtonChange.bind(this);
  }

  handleToasterSideButtonChange(toasterSide) {
    this.setState({toasterSide});
  }

  handleToasterPositionButtonChange(toasterPosition) {
    this.setState({toasterPosition});
  }

  handleToasterTypeButtonChange(toasterType) {
    this.setState({toasterType});
  }

  render() {
    return (
      <div>
        <h2 className="row">Toaster</h2>
        <div className="toaster-config">
          <div className="config-column">
            <div>Side</div>
            <XRadioGroup name="toasterSide" value={this.state.toasterSide} onChange={this.handleToasterSideButtonChange}>
              <XRadioButton label="Left" value="left"/>
              <XRadioButton label="Middle" value="middle"/>
              <XRadioButton label="Right" value="right" checked/>
            </XRadioGroup>
          </div>
          <div className="config-column">
            <div>Position</div>
            <XRadioGroup name="toasterPosition" value={this.state.toasterPosition} onChange={this.handleToasterPositionButtonChange}>
              <XRadioButton label="Top" value="top" checked/>
              <XRadioButton label="Middle" value="middle"/>
              <XRadioButton label="Bottom" value="bottom"/>
            </XRadioGroup>
          </div>
          <div className="config-column">
            <div>Type</div>
            <XRadioGroup name="toasterType" value={this.state.toasterType} onChange={this.handleToasterTypeButtonChange}>
              <XRadioButton label="Info" value="info" theme="blue" checked/>
              <XRadioButton label="Success" value="success" theme="green"/>
              <XRadioButton label="Warning" value="warning" theme="yellow"/>
              <XRadioButton label="Error" value="error" theme="red"/>
            </XRadioGroup>
          </div>
        </div>
        <div><XButton name="Create Toast" raised/></div>
      </div>
    );
  }
}

export default Toaster;