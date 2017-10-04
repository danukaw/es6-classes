import React from 'react';

class ComponentTwo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count : this.props.count
    }

  }

  render () {
    return (
      <div>
        <h3> This is created using es6 classes with React.Component..</h3>
        <p>Count is {this.state.count}</p>
      </div>
    );
  }
}

ComponentTwo.defaultProps = {
  count : 4
}

ComponentTwo.propTypes = {
  count : React.PropTypes.number
}

export default ComponentTwo;
