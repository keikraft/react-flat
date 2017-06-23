import './pageStyles.scss';

import React from 'react';

class Colors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '',
      hexValue: '',
      rgbValue: ''
    };
  }

  handleClick(color, hexValue, rgbValue) {
    this.setState({color, hexValue, rgbValue});
  }

  renderColorValues() {
    const {color, hexValue, rgbValue} = this.state;

    return (
      <div className="color-values-box">
        <span className="values-box-name" style={{backgroundColor: hexValue}}>{color}</span>
        <div>
          <span className="values-box-type">HEX:</span>
          <span>{hexValue}</span>
        </div>
        <div>
          <span className="values-box-type">RGB:</span>
          <span>{rgbValue}</span>
        </div>
      </div>
    );
  }

  render() {
    const colorSelected = this.state.hexValue || this.state.rgbValue;

    return (
      <div>
        <h2>Colors</h2>
        <div className="color-values">
          {colorSelected ? this.renderColorValues() : <span>Click on a color to see its HEX/RGB values.</span>}
        </div>
        <div className="colors-row">
          <div className="color-container">
            <span className="red330">Red</span>
            <div className="color-block">
              <div className="color-box red100-b" onClick={this.handleClick.bind(this, 'red100', '#ffccbc', '(255, 204, 188)')}><span>red100</span></div>
              <div className="color-box red110-b" onClick={this.handleClick.bind(this, 'red110', '#ffac9c', '(255, 172, 156)')}><span>red110</span></div>
              <div className="color-box red120-b" onClick={this.handleClick.bind(this, 'red120', '#ff8c7c', '(255, 140, 124)')}><span>red120</span></div>
              <div className="color-box red130-b" onClick={this.handleClick.bind(this, 'red130', '#ff7c6c', '(255, 124, 108)')}><span>red130</span></div>

              <div className="color-box red200-b" onClick={this.handleClick.bind(this, 'red200', '#ff6c5c', '(255, 108, 92)')}><span>red200</span></div>
              <div className="color-box red210-b" onClick={this.handleClick.bind(this, 'red210', '#f75c4c', '(247, 92, 76)')}><span>red210</span></div>
              <div className="color-box red220-b" onClick={this.handleClick.bind(this, 'red220', '#e74c3c', '(231, 76, 60)')}><span>red220</span></div>
              <div className="color-box red230-b" onClick={this.handleClick.bind(this, 'red230', '#d73c2c', '(215, 60, 44)')}><span>red230</span></div>

              <div className="color-box red300-b" onClick={this.handleClick.bind(this, 'red300', '#c72c1c', '(199, 44, 28)')}><span>red300</span></div>
              <div className="color-box red310-b" onClick={this.handleClick.bind(this, 'red310', '#b71c0c', '(183, 28, 12)')}><span>red310</span></div>
              <div className="color-box red320-b" onClick={this.handleClick.bind(this, 'red320', '#a70c00', '(167, 12, 09')}><span>red320</span></div>
              <div className="color-box red330-b" onClick={this.handleClick.bind(this, 'red330', '#870000', '(135, 0, 0)')}><span>red330</span></div>
            </div>
          </div>

          <div className="color-container">
            <span className="pink330">Pink</span>
            <div className="color-block">
              <div className="color-box pink100-b" onClick={this.handleClick.bind(this, 'pink100', '#ffbcd8', '(255, 188, 216)')}><span>pink100</span></div>
              <div className="color-box pink110-b" onClick={this.handleClick.bind(this, 'pink110', '#ff8cc8', '(255, 140, 200)')}><span>pink110</span></div>
              <div className="color-box pink120-b" onClick={this.handleClick.bind(this, 'pink120', '#ff7cb8', '(255, 124, 184)')}><span>pink120</span></div>
              <div className="color-box pink130-b" onClick={this.handleClick.bind(this, 'pink130', '#ff6ca8', '(255, 108, 168)')}><span>pink130</span></div>

              <div className="color-box pink200-b" onClick={this.handleClick.bind(this, 'pink200', '#ff6ca8', '(255, 108, 168)')}><span>pink200</span></div>
              <div className="color-box pink210-b" onClick={this.handleClick.bind(this, 'pink210', '#ea4c88', '(234, 76, 136)')}><span>pink210</span></div>
              <div className="color-box pink220-b" onClick={this.handleClick.bind(this, 'pink220', '#da3c78', '(218, 60, 120)')}><span>pink220</span></div>
              <div className="color-box pink230-b" onClick={this.handleClick.bind(this, 'pink230', '#ca2c68', '(202, 44, 104)')}><span>pink230</span></div>

              <div className="color-box pink300-b" onClick={this.handleClick.bind(this, 'pink300', 'ba1c58', '(186, 28, 88)')}><span>pink300</span></div>
              <div className="color-box pink310-b" onClick={this.handleClick.bind(this, 'pink310', '#aa0c48', '(170, 12, 72)')}><span>pink310</span></div>
              <div className="color-box pink320-b" onClick={this.handleClick.bind(this, 'pink320', '#9a0038', '(154, 0, 56)')}><span>pink320</span></div>
              <div className="color-box pink330-b" onClick={this.handleClick.bind(this, 'pink330', '#8a0028', '(138, 0, 40)')}><span>pink330</span></div>
            </div>
          </div>

          <div className="color-container">
            <span className="purple330">Purple</span>
            <div className="color-block">
              <div className="color-box purple100-b" onClick={this.handleClick.bind(this, 'purple100', '#dcc6e0', '')}><span>purple100</span></div>
              <div className="color-box purple110-b" onClick={this.handleClick.bind(this, 'purple110', '#cea0e4', '')}><span>purple110</span></div>
              <div className="color-box purple120-b" onClick={this.handleClick.bind(this, 'purple120', '#be90d4', '')}><span>purple120</span></div>
              <div className="color-box purple130-b" onClick={this.handleClick.bind(this, 'purple130', '#ab69c6', '')}><span>purple130</span></div>

              <div className="color-box purple200-b" onClick={this.handleClick.bind(this, 'purple200', '#ab69c6', '')}><span>purple200</span></div>
              <div className="color-box purple210-b" onClick={this.handleClick.bind(this, 'purple210', '#8e44ad', '')}><span>purple210</span></div>
              <div className="color-box purple220-b" onClick={this.handleClick.bind(this, 'purple220', '#7e349d', '')}><span>purple220</span></div>
              <div className="color-box purple230-b" onClick={this.handleClick.bind(this, 'purple230', '#6e248d', '')}><span>purple230</span></div>

              <div className="color-box purple300-b" onClick={this.handleClick.bind(this, 'purple300', '#5e147d', '')}><span>purple300</span></div>
              <div className="color-box purple310-b" onClick={this.handleClick.bind(this, 'purple310', '#4e046d', '')}><span>purple310</span></div>
              <div className="color-box purple320-b" onClick={this.handleClick.bind(this, 'purple320', '#3e005d', '')}><span>purple320</span></div>
              <div className="color-box purple330-b" onClick={this.handleClick.bind(this, 'purple330', '#1e003d', '')}><span>purple330</span></div>
            </div>
          </div>
          <div className="color-container">
            <span className="blue330">Blue</span>
            <div className="color-block">
              <div className="color-box blue100-b" onClick={this.handleClick.bind(this, 'blue100', '#39d5ff', '')}><span>blue100</span></div>
              <div className="color-box blue110-b" onClick={this.handleClick.bind(this, 'blue110', '#29c5ff', '')}><span>blue110</span></div>
              <div className="color-box blue120-b" onClick={this.handleClick.bind(this, 'blue120', '#19b5fe', '')}><span>blue120</span></div>
              <div className="color-box blue130-b" onClick={this.handleClick.bind(this, 'blue130', '#22a7f0', '')}><span>blue130</span></div>

              <div className="color-box blue200-b" onClick={this.handleClick.bind(this, 'blue200', '#1297e0', '')}><span>blue200</span></div>
              <div className="color-box blue210-b" onClick={this.handleClick.bind(this, 'blue210', '#0287d0', '')}><span>blue210</span></div>
              <div className="color-box blue220-b" onClick={this.handleClick.bind(this, 'blue220', '#0077c0', '')}><span>blue220</span></div>
              <div className="color-box blue230-b" onClick={this.handleClick.bind(this, 'blue230', '#0067b0', '')}><span>blue230</span></div>

              <div className="color-box blue300-b" onClick={this.handleClick.bind(this, 'blue300', '#0057a0', '')}><span>blue300</span></div>
              <div className="color-box blue310-b" onClick={this.handleClick.bind(this, 'blue310', '#004790', '')}><span>blue310</span></div>
              <div className="color-box blue320-b" onClick={this.handleClick.bind(this, 'blue320', '#003780', '')}><span>blue320</span></div>
              <div className="color-box blue330-b" onClick={this.handleClick.bind(this, 'blue330', '#102770', '')}><span>blue330</span></div>
            </div>
          </div>
        </div>
        <div className="colors-row">
          <div className="color-container">
            <span className="aqua330">Aqua</span>
            <div className="color-block">
              <div className="color-box aqua100-b" onClick={this.handleClick.bind(this, 'aqua100', '#5efaf7', '')}><span>aqua100</span></div>
              <div className="color-box aqua110-b" onClick={this.handleClick.bind(this, 'aqua110', '#51f5ea', '')}><span>aqua110</span></div>
              <div className="color-box aqua120-b" onClick={this.handleClick.bind(this, 'aqua120', '#47ebe0', '')}><span>aqua120</span></div>
              <div className="color-box aqua130-b" onClick={this.handleClick.bind(this, 'aqua130', '#37dbd0', '')}><span>aqua130</span></div>

              <div className="color-box aqua200-b" onClick={this.handleClick.bind(this, 'aqua200', '#27cbc0', '')}><span>aqua200</span></div>
              <div className="color-box aqua210-b" onClick={this.handleClick.bind(this, 'aqua210', '#17bbb0', '')}><span>aqua210</span></div>
              <div className="color-box aqua220-b" onClick={this.handleClick.bind(this, 'aqua220', '#07aba0', '')}><span>aqua220</span></div>
              <div className="color-box aqua230-b" onClick={this.handleClick.bind(this, 'aqua230', '#009b90', '')}><span>aqua230</span></div>

              <div className="color-box aqua300-b" onClick={this.handleClick.bind(this, 'aqua300', '#008b80', '')}><span>aqua300</span></div>
              <div className="color-box aqua310-b" onClick={this.handleClick.bind(this, 'aqua310', '#007b70', '')}><span>aqua310</span></div>
              <div className="color-box aqua320-b" onClick={this.handleClick.bind(this, 'aqua320', '#106b60', '')}><span>aqua320</span></div>
              <div className="color-box aqua330-b" onClick={this.handleClick.bind(this, 'aqua330', '#005b50', '')}><span>aqua330</span></div>
            </div>
          </div>

          <div className="color-container">
            <span className="green330">Green</span>
            <div className="color-block">
              <div className="color-box green100-b" onClick={this.handleClick.bind(this, 'green100', '#8effc1', '')}><span>green100</span></div>
              <div className="color-box green110-b" onClick={this.handleClick.bind(this, 'green110', '#5efca1', '')}><span>green110</span></div>
              <div className="color-box green120-b" onClick={this.handleClick.bind(this, 'green120', '#4eec91', '')}><span>green120</span></div>
              <div className="color-box green130-b" onClick={this.handleClick.bind(this, 'green130', '#3edc81', '')}><span>green130</span></div>

              <div className="color-box green200-b" onClick={this.handleClick.bind(this, 'green200', '#2ecc71', '')}><span>green200</span></div>
              <div className="color-box green210-b" onClick={this.handleClick.bind(this, 'green210', '#1ebc61', '')}><span>green210</span></div>
              <div className="color-box green220-b" onClick={this.handleClick.bind(this, 'green220', '#0eac51', '')}><span>green220</span></div>
              <div className="color-box green230-b" onClick={this.handleClick.bind(this, 'green230', '#009c41', '')}><span>green230</span></div>

              <div className="color-box green300-b" onClick={this.handleClick.bind(this, 'green300', '#008c31', '')}><span>green300</span></div>
              <div className="color-box green310-b" onClick={this.handleClick.bind(this, 'green310', '#007c21', '')}><span>green310</span></div>
              <div className="color-box green320-b" onClick={this.handleClick.bind(this, 'green320', '#006c11', '')}><span>green320</span></div>
              <div className="color-box green330-b" onClick={this.handleClick.bind(this, 'green330', '#005c01', '')}><span>green330</span></div>
            </div>
          </div>

          <div className="color-container">
            <span className="yellow330">Yellow</span>
            <div className="color-block">
              <div className="color-box yellow100-b" onClick={this.handleClick.bind(this, 'yellow100', '#fde3a7', '')}><span>yellow100</span></div>
              <div className="color-box yellow110-b" onClick={this.handleClick.bind(this, 'yellow110', '#ffcf4b', '')}><span>yellow110</span></div>
              <div className="color-box yellow120-b" onClick={this.handleClick.bind(this, 'yellow120', '#f9bf3b', '')}><span>yellow120</span></div>
              <div className="color-box yellow130-b" onClick={this.handleClick.bind(this, 'yellow130', '#f9b32f', '')}><span>yellow130</span></div>

              <div className="color-box yellow200-b" onClick={this.handleClick.bind(this, 'yellow200', '#f5ab35', '')}><span>yellow200</span></div>
              <div className="color-box yellow210-b" onClick={this.handleClick.bind(this, 'yellow210', '#f39c12', '')}><span>yellow210</span></div>
              <div className="color-box yellow220-b" onClick={this.handleClick.bind(this, 'yellow220', '#f1892d', '')}><span>yellow220</span></div>
              <div className="color-box yellow230-b" onClick={this.handleClick.bind(this, 'yellow230', '#e67e22', '')}><span>yellow230</span></div>

              <div className="color-box yellow300-b" onClick={this.handleClick.bind(this, 'yellow300', '#d87400', '')}><span>yellow300</span></div>
              <div className="color-box yellow310-b" onClick={this.handleClick.bind(this, 'yellow310', '#c86400', '')}><span>yellow310</span></div>
              <div className="color-box yellow320-b" onClick={this.handleClick.bind(this, 'yellow320', '#b85400', '')}><span>yellow320</span></div>
              <div className="color-box yellow330-b" onClick={this.handleClick.bind(this, 'yellow330', '#a84410', '')}><span>yellow330</span></div>
            </div>
          </div>
          <div className="color-container">
            <span className="orange330">Orange</span>
            <div className="color-block">
              <div className="color-box orange100-b" onClick={this.handleClick.bind(this, 'orange100', '#ffdcb5', '')}><span>orange100</span></div>
              <div className="color-box orange110-b" onClick={this.handleClick.bind(this, 'orange110', '#ffc29b', '')}><span>orange110</span></div>
              <div className="color-box orange120-b" onClick={this.handleClick.bind(this, 'orange120', '#ffb28b', '')}><span>orange120</span></div>
              <div className="color-box orange130-b" onClick={this.handleClick.bind(this, 'orange130', '#ffa27b', '')}><span>orange130</span></div>

              <div className="color-box orange200-b" onClick={this.handleClick.bind(this, 'orange200', '#ff926b', '')}><span>orange200</span></div>
              <div className="color-box orange210-b" onClick={this.handleClick.bind(this, 'orange210', '#f3825b', '')}><span>orange210</span></div>
              <div className="color-box orange220-b" onClick={this.handleClick.bind(this, 'orange220', '#e3724b', '')}><span>orange220</span></div>
              <div className="color-box orange230-b" onClick={this.handleClick.bind(this, 'orange230', '#d3623b', '')}><span>orange230</span></div>

              <div className="color-box orange300-b" onClick={this.handleClick.bind(this, 'orange300', '#c3522b', '')}><span>orange300</span></div>
              <div className="color-box orange310-b" onClick={this.handleClick.bind(this, 'orange310', '#b3421b', '')}><span>orange310</span></div>
              <div className="color-box orange320-b" onClick={this.handleClick.bind(this, 'orange320', '#a3320b', '')}><span>orange320</span></div>
              <div className="color-box orange330-b" onClick={this.handleClick.bind(this, 'orange330', '#932210', '')}><span>orange330</span></div>
            </div>
          </div>
        </div>
        <div className="colors-row">
          <div className="color-container">
            <span className="brown330">Brown</span>
            <div className="color-block">
              <div className="color-box brown100-b" onClick={this.handleClick.bind(this, 'brown100', '#f6c4a3', '')}><span>brown100</span></div>
              <div className="color-box brown110-b" onClick={this.handleClick.bind(this, 'brown110', '#eab897', '')}><span>brown110</span></div>
              <div className="color-box brown120-b" onClick={this.handleClick.bind(this, 'brown120', '#dfad8c', '')}><span>brown120</span></div>
              <div className="color-box brown130-b" onClick={this.handleClick.bind(this, 'brown130', '#d4a281', '')}><span>brown130</span></div>

              <div className="color-box brown200-b" onClick={this.handleClick.bind(this, 'brown200', '#ce9c7b', '')}><span>brown200</span></div>
              <div className="color-box brown210-b" onClick={this.handleClick.bind(this, 'brown210', '#be8c6b', '')}><span>brown210</span></div>
              <div className="color-box brown220-b" onClick={this.handleClick.bind(this, 'brown220', '#ae7c5b', '')}><span>brown220</span></div>
              <div className="color-box brown230-b" onClick={this.handleClick.bind(this, 'brown230', '#9e6c4b', '')}><span>brown230</span></div>

              <div className="color-box brown300-b" onClick={this.handleClick.bind(this, 'brown300', '#8e5c3b', '')}><span>brown300</span></div>
              <div className="color-box brown310-b" onClick={this.handleClick.bind(this, 'brown310', '#7e4c2b', '')}><span>brown310</span></div>
              <div className="color-box brown320-b" onClick={this.handleClick.bind(this, 'brown320', '#6e3c1b', '')}><span>brown320</span></div>
              <div className="color-box brown330-b" onClick={this.handleClick.bind(this, 'brown330', '#5e2c0b', '')}><span>brown330</span></div>
            </div>
          </div>
          <div className="color-container">
            <span className="grey330">Grey</span>
            <div className="color-block">
              <div className="color-box grey100-b" onClick={this.handleClick.bind(this, 'grey100', '#e0e0e0', '')}><span>grey100</span></div>
              <div className="color-box grey110-b" onClick={this.handleClick.bind(this, 'grey110', '#d0d0d0', '')}><span>grey110</span></div>
              <div className="color-box grey120-b" onClick={this.handleClick.bind(this, 'grey120', '#c0c0c0', '')}><span>grey120</span></div>
              <div className="color-box grey130-b" onClick={this.handleClick.bind(this, 'grey130', '#a0a0a0', '')}><span>grey130</span></div>

              <div className="color-box grey200-b" onClick={this.handleClick.bind(this, 'grey200', '#909090', '')}><span>grey200</span></div>
              <div className="color-box grey210-b" onClick={this.handleClick.bind(this, 'grey210', '#808080', '')}><span>grey210</span></div>
              <div className="color-box grey220-b" onClick={this.handleClick.bind(this, 'grey220', '#707070', '')}><span>grey220</span></div>
              <div className="color-box grey230-b" onClick={this.handleClick.bind(this, 'grey230', '#606060', '')}><span>grey230</span></div>

              <div className="color-box grey300-b" onClick={this.handleClick.bind(this, 'grey300', '#505050', '')}><span>grey300</span></div>
              <div className="color-box grey310-b" onClick={this.handleClick.bind(this, 'grey310', '#404040', '')}><span>grey310</span></div>
              <div className="color-box grey320-b" onClick={this.handleClick.bind(this, 'grey320', '#303030', '')}><span>grey320</span></div>
              <div className="color-box grey330-b" onClick={this.handleClick.bind(this, 'grey330', '#202020', '')}><span>grey330</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Colors;