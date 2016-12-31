import React from 'react';

import styles from './intro.css';

class Intro extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        <h2 className={styles.heading}>Time to get started!</h2>
        <img className={styles.background} src="../../images/high-voltage.png" alt="zap emoji" />
      </div>
    );
  }
}

export default Intro;
