import './home.scss';

import React from 'react';

import AppLogo from '../app-logo/AppLogo';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logoColor: 'red'
    };

    this.colorArray = ['red', 'pink', 'purple', 'blue', 'aqua', 'green', 'yellow', 'orange', 'brown', 'grey'];
    this.colorIndex = 0;
  }

  componentDidMount() {
    this.colorInternval = setInterval(() => {
      const currentColorIndex = this.colorArray.indexOf(this.state.logoColor) + 1;
      this.colorIndex = currentColorIndex !== this.colorArray.length ? currentColorIndex : 0;

      const logoColor = this.colorArray[this.colorIndex];
      this.setState({logoColor});
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.colorInternval);
  }

  render() {
    const {logoColor} = this.state;

    return (
      <div className="app-home">
        <div className="home-header">
          <AppLogo color={logoColor} />
          <h2>React Flat</h2>
          <p>Components made for React implmented with kind of Material FLAT Design.</p>
        </div>
      </div>
    );
  }
}

export default Home;