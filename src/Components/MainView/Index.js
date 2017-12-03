import React from 'react';
import { connect } from 'react-redux';
import Purpose from '../Shared/Purpose';
import Form from '../Shared/Form';
import Header from '../Shared/Header';
import List from '../Shared/List';

class Index extends React.Component {
  render() {
    return (
      <div className="page index">
        <Header />
        <div className="container">
          <div>
            <Purpose />
          </div>
          <div>
            <Form />
          </div>
          <div>
            <List />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
