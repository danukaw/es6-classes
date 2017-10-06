import React from 'react';


/*var isAdmin = true;

var AdminComponent = (Component) => {
  return class AdminComponent extends Component {
    render() {

      if(!isAdmin) {
        return null;
      } else {
        return (
          <div>
            test text here.
            <Component {...this.props}/>
          </div>
        );
      }

    }
  }
}*/

var isAdmin = true;

var AdminComponent = (Component) => {
  return class AdminComponent extends Component {

    componentDidUpdate() {
      console.log("AdminComponent is updated");
      if (super.componentDidUpdate) {
        super.componentDidUpdate();
      }
    }

    render() {

      if(!isAdmin) {
        return null;
      } else {
        return (
          <div className="callout secondary">
              <p className="alert label"> Private Informations </p>
            {super.render()}
          </div>
        );
      }

    }
  }
}

class ComponentTwo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count : this.props.count
    }
    this.clickButton = this.clickButton.bind(this);
  }

  clickButton () {
    this.setState({
      count : this.state.count + 1
    });
  }

  componentDidUpdate(){
    console.log("componentTwo is updated");
  }

  render () {
    return (
      <div>
        <h3> This is created using es6 classes with React.Component..</h3>
        <p>Count is {this.state.count}</p>
          <button className ="button" onClick={this.clickButton}> Button Two</button>
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

export default AdminComponent(ComponentTwo);
