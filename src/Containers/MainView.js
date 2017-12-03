import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Index from '../Components/MainView/Index';

class MainView extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="main view">
        <Route exact={true} path="/" component={Index} />
      </div>
    );
  }
}

MainView.propTypes = {};

const mapDispatchToProps = (dispatch, state) => ({});

export default connect(state => {
  return {};
}, mapDispatchToProps)(MainView);
