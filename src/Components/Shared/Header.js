import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <div className="shared header">
        <div className="wrap-container">
          <img src="/img/mozilla.svg" alt="Mozilla logo" />
        </div>
      </div>
    );
  }
}

export default Header;
