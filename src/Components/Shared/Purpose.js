import React from 'react';
import { connect } from 'react-redux';
import { title } from '../../Config/config.json';

class Purpose extends React.Component {
  render() {
    return (
      <div className="shared purpose">
        <h2>{title}</h2>
        <h3>feedback from</h3>
      </div>
    );
  }
}

export default Purpose;
