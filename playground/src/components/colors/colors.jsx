import React from 'react';

import '../../../../components/_colors.scss';
import './pageStyles.scss';

class Colors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '',
      hexValue: '',
      rgbaValue: ''
    };
  }

  handleClick(color, hexValue, rgbaValue) {
    this.setState({color, hexValue, rgbaValue});
  }

  renderColorValues() {
    const {color, hexValue, rgbaValue} = this.state;

    return (
      <div>
        <span>{color}</span>
        <span>{`HEX: ${hexValue}`}</span>
        <span>{`RGBA: ${rgbaValue}`}</span>
      </div>
    );
  }

  render() {
    const colorSelected = this.state.hexValue || this.state.rgbaValue;

    return (
      <div>
        <div className="color-values">
          <h3>Colors</h3>
          {colorSelected ? this.renderColorValues() : <span>Click on a color to see its HEX/RGBA values.</span>}
        </div>
        <div className="colors-row">
          <div className="color-container">
            <span className="red330">Red</span>
            <div className="color-block">
              <div className="color-box red100-b" onClick={this.handleClick.bind(this, 'red100', 'lololo', '')}><span>red100</span></div>
              <div className="color-box red110-b" onClick={this.handleClick.bind(this, 'red110', 'lololo', '')}><span>red110</span></div>
              <div className="color-box red120-b" onClick={this.handleClick.bind(this, 'red120', 'lololo', '')}><span>red120</span></div>
              <div className="color-box red130-b" onClick={this.handleClick.bind(this, 'red130', 'lololo', '')}><span>red130</span></div>

              <div className="color-box red200-b"><span>red200</span></div>
              <div className="color-box red210-b"><span>red210</span></div>
              <div className="color-box red220-b"><span>red220</span></div>
              <div className="color-box red230-b"><span>red230</span></div>

              <div className="color-box red300-b"><span>red300</span></div>
              <div className="color-box red310-b"><span>red310</span></div>
              <div className="color-box red320-b"><span>red320</span></div>
              <div className="color-box red330-b"><span>red330</span></div>
            </div>
          </div>

          <div className="color-container">
            <span className="pink330">Pink</span>
            <div className="color-block">
              <div className="color-box pink100-b"><span>pink100</span></div>
              <div className="color-box pink110-b"><span>pink110</span></div>
              <div className="color-box pink120-b"><span>pink120</span></div>
              <div className="color-box pink130-b"><span>pink130</span></div>

              <div className="color-box pink200-b"><span>pink200</span></div>
              <div className="color-box pink210-b"><span>pink210</span></div>
              <div className="color-box pink220-b"><span>pink220</span></div>
              <div className="color-box pink230-b"><span>pink230</span></div>

              <div className="color-box pink300-b"><span>pink300</span></div>
              <div className="color-box pink310-b"><span>pink310</span></div>
              <div className="color-box pink320-b"><span>pink320</span></div>
              <div className="color-box pink330-b"><span>pink330</span></div>
            </div>
          </div>

          <div className="color-container">
            <span className="purple330">Purple</span>
            <div className="color-block">
              <div className="color-box purple100-b"><span>purple100</span></div>
              <div className="color-box purple110-b"><span>purple110</span></div>
              <div className="color-box purple120-b"><span>purple120</span></div>
              <div className="color-box purple130-b"><span>purple130</span></div>

              <div className="color-box purple200-b"><span>purple200</span></div>
              <div className="color-box purple210-b"><span>purple210</span></div>
              <div className="color-box purple220-b"><span>purple220</span></div>
              <div className="color-box purple230-b"><span>purple230</span></div>

              <div className="color-box purple300-b"><span>purple300</span></div>
              <div className="color-box purple310-b"><span>purple310</span></div>
              <div className="color-box purple320-b"><span>purple320</span></div>
              <div className="color-box purple330-b"><span>purple330</span></div>
            </div>
          </div>
          <div className="color-container">
            <span className="blue330">Blue</span>
            <div className="color-block">
              <div className="color-box blue100-b"><span>blue100</span></div>
              <div className="color-box blue110-b"><span>blue110</span></div>
              <div className="color-box blue120-b"><span>blue120</span></div>
              <div className="color-box blue130-b"><span>blue130</span></div>

              <div className="color-box blue200-b"><span>blue200</span></div>
              <div className="color-box blue210-b"><span>blue210</span></div>
              <div className="color-box blue220-b"><span>blue220</span></div>
              <div className="color-box blue230-b"><span>blue230</span></div>

              <div className="color-box blue300-b"><span>blue300</span></div>
              <div className="color-box blue310-b"><span>blue310</span></div>
              <div className="color-box blue320-b"><span>blue320</span></div>
              <div className="color-box blue330-b"><span>blue330</span></div>
            </div>
          </div>
        </div>
        <div className="colors-row">
          <div className="color-container">
            <span className="aqua330">Aqua</span>
            <div className="color-block">
              <div className="color-box aqua100-b"><span>aqua100</span></div>
              <div className="color-box aqua110-b"><span>aqua110</span></div>
              <div className="color-box aqua120-b"><span>aqua120</span></div>
              <div className="color-box aqua130-b"><span>aqua130</span></div>

              <div className="color-box aqua200-b"><span>aqua200</span></div>
              <div className="color-box aqua210-b"><span>aqua210</span></div>
              <div className="color-box aqua220-b"><span>aqua220</span></div>
              <div className="color-box aqua230-b"><span>aqua230</span></div>

              <div className="color-box aqua300-b"><span>aqua300</span></div>
              <div className="color-box aqua310-b"><span>aqua310</span></div>
              <div className="color-box aqua320-b"><span>aqua320</span></div>
              <div className="color-box aqua330-b"><span>aqua330</span></div>
            </div>
          </div>

          <div className="color-container">
            <span className="green330">Green</span>
            <div className="color-block">
              <div className="color-box green100-b"><span>green100</span></div>
              <div className="color-box green110-b"><span>green110</span></div>
              <div className="color-box green120-b"><span>green120</span></div>
              <div className="color-box green130-b"><span>green130</span></div>

              <div className="color-box green200-b"><span>green200</span></div>
              <div className="color-box green210-b"><span>green210</span></div>
              <div className="color-box green220-b"><span>green220</span></div>
              <div className="color-box green230-b"><span>green230</span></div>

              <div className="color-box green300-b"><span>green300</span></div>
              <div className="color-box green310-b"><span>green310</span></div>
              <div className="color-box green320-b"><span>green320</span></div>
              <div className="color-box green330-b"><span>green330</span></div>
            </div>
          </div>

          <div className="color-container">
            <span className="yellow330">Yellow</span>
            <div className="color-block">
              <div className="color-box yellow100-b"><span>yellow100</span></div>
              <div className="color-box yellow110-b"><span>yellow110</span></div>
              <div className="color-box yellow120-b"><span>yellow120</span></div>
              <div className="color-box yellow130-b"><span>yellow130</span></div>

              <div className="color-box yellow200-b"><span>yellow200</span></div>
              <div className="color-box yellow210-b"><span>yellow210</span></div>
              <div className="color-box yellow220-b"><span>yellow220</span></div>
              <div className="color-box yellow230-b"><span>yellow230</span></div>

              <div className="color-box yellow300-b"><span>yellow300</span></div>
              <div className="color-box yellow310-b"><span>yellow310</span></div>
              <div className="color-box yellow320-b"><span>yellow320</span></div>
              <div className="color-box yellow330-b"><span>yellow330</span></div>
            </div>
          </div>
          <div className="color-container">
            <span className="orange330">Orange</span>
            <div className="color-block">
              <div className="color-box orange100-b"><span>orange100</span></div>
              <div className="color-box orange110-b"><span>orange110</span></div>
              <div className="color-box orange120-b"><span>orange120</span></div>
              <div className="color-box orange130-b"><span>orange130</span></div>

              <div className="color-box orange200-b"><span>orange200</span></div>
              <div className="color-box orange210-b"><span>orange210</span></div>
              <div className="color-box orange220-b"><span>orange220</span></div>
              <div className="color-box orange230-b"><span>orange230</span></div>

              <div className="color-box orange300-b"><span>orange300</span></div>
              <div className="color-box orange310-b"><span>orange310</span></div>
              <div className="color-box orange320-b"><span>orange320</span></div>
              <div className="color-box orange330-b"><span>orange330</span></div>
            </div>
          </div>
        </div>
        <div className="colors-row">
          <div className="color-container">
            <span className="brown330">Brown</span>
            <div className="color-block">
              <div className="color-box brown100-b"><span>brown100</span></div>
              <div className="color-box brown110-b"><span>brown110</span></div>
              <div className="color-box brown120-b"><span>brown120</span></div>
              <div className="color-box brown130-b"><span>brown130</span></div>

              <div className="color-box brown200-b"><span>brown200</span></div>
              <div className="color-box brown210-b"><span>brown210</span></div>
              <div className="color-box brown220-b"><span>brown220</span></div>
              <div className="color-box brown230-b"><span>brown230</span></div>

              <div className="color-box brown300-b"><span>brown300</span></div>
              <div className="color-box brown310-b"><span>brown310</span></div>
              <div className="color-box brown320-b"><span>brown320</span></div>
              <div className="color-box brown330-b"><span>brown330</span></div>
            </div>
          </div>
          <div className="color-container">
            <span className="grey330">Grey</span>
            <div className="color-block">
              <div className="color-box grey100-b"><span>grey100</span></div>
              <div className="color-box grey110-b"><span>grey110</span></div>
              <div className="color-box grey120-b"><span>grey120</span></div>
              <div className="color-box grey130-b"><span>grey130</span></div>

              <div className="color-box grey200-b"><span>grey200</span></div>
              <div className="color-box grey210-b"><span>grey210</span></div>
              <div className="color-box grey220-b"><span>grey220</span></div>
              <div className="color-box grey230-b"><span>grey230</span></div>

              <div className="color-box grey300-b"><span>grey300</span></div>
              <div className="color-box grey310-b"><span>grey310</span></div>
              <div className="color-box grey320-b"><span>grey320</span></div>
              <div className="color-box grey330-b"><span>grey330</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Colors;