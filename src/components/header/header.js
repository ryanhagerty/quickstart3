import React from 'react';

import styles from './header.css';

class Header extends React.Component {
  render () {
    return (
      <header className={styles.header}>
        <h1>Quickstart3</h1>
      </header>
    );
  }
}

export default Header;
