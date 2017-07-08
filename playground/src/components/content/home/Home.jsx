import './pageStyles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import XButton from '../../../../../components/button/XButton';
import AppLogo from 'components/content/app-logo/AppLogo';

import RoutesEnum from 'router/routes.enum';

const HomePropTypes = {
  history: PropTypes.object.isRequired,
  theme: PropTypes.string,
  onMount: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired
};
const HomeDefaultProps = {
  theme: 'red'
};

class Home extends React.Component {
  componentWillMount() {
    this.props.onMount();
  }

  componentWillUnmount() {
    this.props.onUnmount();
  }

  handleExploreClick = () => {
    this.props.history.push(RoutesEnum.installation);
  };

  render() {
    const {theme} = this.props;

    return (
      <div className={classnames('app-home', theme)}>
        <div className="home-header">
          <AppLogo big color={theme} />
          <h2>React Flat</h2>
          <p>Components made with and for React, implemented with kind of Material FLAT Design.</p>
        </div>
        <div className="home-content">
          <XButton raised text="Explore" theme={theme} onClick={this.handleExploreClick} />
        </div>
      </div>
    );
  }
}

Home.propTypes = HomePropTypes;
Home.defaultProps = HomeDefaultProps;

export default Home;