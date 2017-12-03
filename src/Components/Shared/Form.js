import React from 'react';
import { connect } from 'react-redux';
import { comments, apiaccess } from '../../Config/config.json';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getDefaults();

    this.onTextareChange = this.onTextareChange.bind(this);
    this.saveFeedback = this.saveFeedback.bind(this);
  }

  setDefaults() {
    this.setState(this.getDefaults());
  }

  getDefaults() {
    return {
      stars: 3,
      feedback: comments[2],
      response: '',
    };
  }

  onClick(stars) {
    this.setState({
      stars: stars,
      feedback: comments[stars - 1],
    });
  }
  generateStarts() {
    let stars = [];

    for (var i = 1; i <= 5; i++) {
      let onClickFn = this.onClick.bind(this, i);
      if (this.state.stars >= i) {
        stars.push(
          <li key={i}>
            <i className="fa fa-star" onClick={onClickFn} />
          </li>
        );
      } else {
        stars.push(
          <li key={i}>
            <i className="fa fa-star-o" onClick={onClickFn} />
          </li>
        );
      }
    }

    return <ul>{stars}</ul>;
  }

  getResponse() {
    if (this.state.response.length > 0) {
      return <p>{this.state.response}</p>;
    } else {
      return null;
    }
  }

  onTextareChange(event) {
    this.setTextAreaValue(event.target.value);
  }

  setTextAreaValue(value) {
    this.setState({
      feedback: value,
    });
  }

  saveFeedback() {
    fetch(apiaccess + '/saveFeedback', {
      method: 'put',
      body: JSON.stringify({
        stars: this.state.stars,
        feedback: this.state.feedback,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(respString => {
        return respString.json();
      })
      .then(response => {
        if (response.code === 200) {
          this.setState({
            response: 'Thank you for your feedback!',
          });

          setTimeout(() => {
            this.setDefaults();
          }, 3000);
        }
      });
  }

  render() {
    return (
      <div className="shared form">
        <header>Give us feedback</header>
        <main>
          <h3>Overall rating</h3>
          {this.generateStarts()}
          <textarea onChange={this.onTextareChange} value={this.state.feedback}>
            {this.state.feedback}
          </textarea>
          {this.getResponse()}
        </main>
        <button onClick={this.saveFeedback}>Send</button>
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
