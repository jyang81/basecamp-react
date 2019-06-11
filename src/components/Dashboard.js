import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

class Dashboard extends Component {
  // constructor(props) {
  //   super(props)
  //
  // }

  // static getDerivedStateFromProps

  render() {
    console.log("USER", this.props.user)
    return (
      <div className="App-header">
      Dashboard Page

      <p>{this.props.user.name}</p>
      <p>{this.props.user.school}</p>
      <p>{this.props.user.start_date}</p>
      <p>{this.props.user.end_date}</p>
      <p>{this.props.user.course.name}</p>

      </div>
    )
  }


}

export default Dashboard;
