import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import HomePage from '../pages/home.page';

describe(`HomePage`, () => {
  it(`renders correctly`, () => {
    // Render the homepage
    const home = TestUtils.renderIntoDocument(
      <HomePage />
    );
  });
});
