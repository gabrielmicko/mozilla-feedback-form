import React from 'react';
import { connect } from 'react-redux';
import { mode } from '../../Config/config.json';

class List extends React.Component {
  render() {
    if (mode === 'firefox') {
      <div className="shared list">
        <h3>Firefox Quantum</h3>
        <ul>
          <li>lightning fast</li>
          <li>secure</li>
          <li>great design</li>
          <li>smart features</li>
        </ul>
      </div>;
    } else {
      return (
        <div className="shared list">
          <h3>You have seen</h3>
          <ul>
            <li>The new Firefox Quantum</li>
            <li>WebVR JavaScript API</li>
            <li>
              A-Frame, web framework for building virtual reality experiences
            </li>
            <li>HTC Vive is a virtual reality headset</li>
          </ul>
        </div>
      );
    }
  }
}

export default List;
