import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.setState({
      user: this.props.user
    })
    console.log('Dashboard user:', this.state.user)
  }


  render() {
    return (
      <div className="App-header">
      Dashboard Page

      <p>{this.state.user.name}</p>
      </div>
    )
  }


}

export default Dashboard;
