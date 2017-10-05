import React from 'react';

var ComponentOne = React.createClass({

  getInitialState : function () {
    return {
      count : this.props.count
    }
  },

  getDefaultProps : function () {
    return {
      count : 3
    }
  },

  propTypes : {
    count : React.PropTypes.number
  },

  clickButton : function () {
    this.setState({
      count : this.state.count + 1
    });
  },

  render : function () {
    return (
      <div>
        <h3>This react componet is created using React.createClass</h3>
        <p>Count is {this.state.count}</p>
        <button className ="button" onClick={this.clickButton}> Button One</button>
      </div>
    );
  }

});

//module.exports = ComponentOne;
export default ComponentOne; // es6 way of exporting classes
