import React from 'react';
import Immutable from 'immutable';
import XToaster from '../../../../components/toaster/XToaster';
import XButton from '../../../../components/button/XButton';
import XInput from '../../../../components/input/XInput';
import XSlider from '../../../../components/slider/XSlider';
import {XRadioGroup, XRadioButton} from '../../../../components/radio/XRadio';

import './pageStyles.scss';

class Toaster extends React.Component {
  constructor(props) {
    super(props);

    const fromJSOrdered = (js) => {
      return typeof js !== 'object' || js === null ? js :
        Array.isArray(js) ?
          Immutable.Seq(js).map(fromJSOrdered).toList() :
          Immutable.Seq(js).map(fromJSOrdered).toOrderedMap();
    };

    this.state = {
      toastPosition: 'top',
      toastSide: 'right',
      toastType: 'info',
      toastMessage: '',
      toastMessageError: null,
      toastTime: 0,
      toasts: fromJSOrdered({
        top: {left: {}, center: {}, right: {}},
        bottom: {left: {}, center: {}, right: {}}
      })
    };

    this.handleToastSideButtonChange = this.handleToastSideButtonChange.bind(this);
    this.handleToastPositionButtonChange = this.handleToastPositionButtonChange.bind(this);
    this.handleToastTypeButtonChange = this.handleToastTypeButtonChange.bind(this);
    this.handleCreateToastButtonMouseUp = this.handleCreateToastButtonMouseUp.bind(this);
    this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    this.handleSecSliderInputOnChange = this.handleSecSliderInputOnChange.bind(this);
  }

  handleToastSideButtonChange(toastSide) {
    this.setState({toastSide});
  }

  handleToastPositionButtonChange(toastPosition) {
    this.setState({toastPosition});
  }

  handleToastTypeButtonChange(toastType) {
    this.setState({toastType});
  }

  handleMessageInputOnChange(toastMessage) {
    const toastMessageError = toastMessage != null && toastMessage !== undefined && toastMessage !== '' ? null : 'You have to write a toast message.';
    this.setState({toastMessage, toastMessageError});
  }

  handleSecSliderInputOnChange(toastTime) {
    const seconds = parseInt(toastTime);
    this.setState({toastTime: seconds});
  }

  handleCreateToastButtonMouseUp() {
    if (this.state.toastMessageError === null && this.state.toastMessage !== '') {
      this.toastCount = this.toastCount ? this.toastCount + 1 : 1;
      const {toastPosition: position, toastSide: side, toastType: type, toastMessage: message, toastTime: seconds} = this.state;
      const toastKey = `${position}${side}toast-${this.toastCount}`;

      const toastState = {
        type,
        message,
        seconds
      };
      this.setState({toasts: this.state.toasts.updateIn([position, side], (x) => { return x.set(toastKey, toastState); })});
    } else {
      this.setState({toastMessageError: 'You have to write a toast message.'});
    }
  }

  handleRemoveToast(position, side, toastKey) {
    this.setState({toasts: this.state.toasts.updateIn([position, side], (x) => { return x.delete(toastKey); })});
  }

  render() {
    return (
      <div>
        <h2>Toaster</h2>
        <div className="toaster-config">
          <div className="config-column">
            <div className="config-header">POSITION</div>
            <XRadioGroup name="toastPosition" value={this.state.toastPosition} onChange={this.handleToastPositionButtonChange}>
              <XRadioButton label="Top" value="top" checked />
              <XRadioButton label="Bottom" value="bottom" />
            </XRadioGroup>
          </div>
          <div className="config-column">
            <div className="config-header">SIDE</div>
            <XRadioGroup name="toastSide" value={this.state.toastSide} onChange={this.handleToastSideButtonChange}>
              <XRadioButton label="Left" value="left" />
              <XRadioButton label="Center" value="center" />
              <XRadioButton label="Right" value="right" checked />
            </XRadioGroup>
          </div>
          <div className="config-column">
            <div className="config-header">TYPE</div>
            <XRadioGroup name="toastType" value={this.state.toastType} onChange={this.handleToastTypeButtonChange}>
              <XRadioButton label="Info" value="info" theme="blue" checked />
              <XRadioButton label="Success" value="success" theme="green" />
              <XRadioButton label="Warning" value="warning" theme="yellow" />
              <XRadioButton label="Error" value="error" theme="red" />
            </XRadioGroup>
          </div>
        </div>
        <div className="toaster-form">
          <XSlider min={0} max={10} step={1} onChange={this.handleSecSliderInputOnChange} />
          <XInput type="text" placeholder="Toast Message" theme="orange" icon="message" value={this.state.toastMessage} onChange={this.handleMessageInputOnChange} error={this.state.toastMessageError} />
          <XButton text="Create Toast" onMouseUp={this.handleCreateToastButtonMouseUp} raised />
        </div>
        <XToaster top left className="topOverride" toasts={this.state.toasts.getIn(['top', 'left']).toJS()} onRemoveToast={this.handleRemoveToast.bind(this, 'top', 'left')} />
        <XToaster top center className="topOverride" toasts={this.state.toasts.getIn(['top', 'center']).toJS()} onRemoveToast={this.handleRemoveToast.bind(this, 'top', 'center')} />
        <XToaster top right className="topOverride" toasts={this.state.toasts.getIn(['top', 'right']).toJS()} onRemoveToast={this.handleRemoveToast.bind(this, 'top', 'right')} />
        <XToaster bottom left toasts={this.state.toasts.getIn(['bottom', 'left']).toJS()} onRemoveToast={this.handleRemoveToast.bind(this, 'bottom', 'left')} />
        <XToaster bottom center toasts={this.state.toasts.getIn(['bottom', 'center']).toJS()} onRemoveToast={this.handleRemoveToast.bind(this, 'bottom', 'center')} />
        <XToaster bottom right toasts={this.state.toasts.getIn(['bottom', 'right']).toJS()} onRemoveToast={this.handleRemoveToast.bind(this, 'bottom', 'right')} />
      </div>
    );
  }
}

export default Toaster;