import React, {Component} from 'react';
import { Card, Icon } from 'semantic-ui-react'
import moment from 'moment'

class Timer extends Component {
  // constructor() {
  //   super()
    // this.state = {
    // }
  // }
  //
  getTimeRemaining = (end) => {
    let t = Date.parse(end) - Date.parse(new Date());
    let days = Math.floor( t/(1000*60*60*24) + 1);
    return days
  }
  //
  // getTimeRemaining = (end) => {
  //   let a = moment(end)
  //   let b = moment([])
  //   a.diff(b, 'days')
  // }



  render() {
    return (
      <div className="div1">
      <Card fluid className="fullsize">
        <Card.Content>
          <Card.Header>Days Till Graduation <Icon inverted color='blue' name='graduation cap' /></Card.Header>
        <Card.Description className="counter">{this.getTimeRemaining(this.props.user.end_date)}
        </Card.Description>
      </Card.Content>
        <Card.Content className="spread" extra>
          <span className="left"><Icon name='calendar' /> Start: {moment(this.props.user.start_date).format('MMM D')}</span>
          <span className="right"><Icon name='calendar' /> End: {moment(this.props.user.end_date).format('MMM D')}</span>
        </Card.Content>
      </Card>
      </div>
    )
  }

}

export default Timer;
