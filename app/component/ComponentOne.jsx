import React from 'react';

var ComponentOne = React.createClass({

  getInitialState : function () {
    return {
      count : this.props.count
    }
  },

  getDefaultProps : function () {
    return {
      count : 33333333
    }
  },

  propTypes : {
    count : React.PropTypes.number
  },

  render : function () {
    return (
      <div>
        <h3>This react componet is created using </h3>
        <p>Count is {this.state.count}</p>
      </div>
    );
  }

});

//module.exports = ComponentOne;
export default ComponentOne; // es6 way of exporting classes
