import React, {Component} from 'react';
import Header from './Header';
import Timer from './Timer';
import Mood from './Mood';
import Help from './Help';
import ToDo from './ToDo';
import NoteBoard from './NoteBoard';

class Dashboard extends Component {

  render() {
    console.log("Dashboard User:", this.props.user)
    return (
      <div className="App">
        <div className="parent">
          <Header user={this.props.user}
            logOut={this.props.logOut}
            updateUserInfo={this.props.updateUserInfo}
          />
          <Timer user={this.props.user} />
          <Mood user={this.props.user} />
          <ToDo user={this.props.user} />
          <NoteBoard user={this.props.user} />
          <Help />
        </div>
      </div>
    )
  }

}

export default Dashboard;
