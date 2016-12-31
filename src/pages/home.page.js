import React from 'react';

import Header from '../components/header/header';
import Intro from '../components/intro/intro';

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Intro />
      </div>
    );
  }
}

export default HomePage;
