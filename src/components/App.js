import React from 'react';

class App extends React.Component {
  render () {
    return (
      <div id="container">
        { this.props.children }
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element
};

export default App;
