import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

class Dashboard extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     loggedIn: true
  //   }
  // }


  render() {
    console.log("Dashboard User:", this.props.user)
    return (
      <div className="App-header">
      Dashboard Page
      <div className="parent">
        <p>{this.props.user.name}</p>
        <p>{this.props.user.school}</p>
        <p>{this.props.user.start_date}
        {this.props.user.end_date}</p>
        <p>{this.props.user.course.name}</p>
        {this.props.user.to_dos.map(to_do => {
          return <p>{to_do.item}</p>
        })}
      </div>
      </div>
    )
  }


}

export default Dashboard;
