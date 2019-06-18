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
        <Card.Content className="counter" header={this.getTimeRemaining(this.props.user.end_date)} />
        <Card.Content description='Days Till Graduation!' />
        <Card.Content extra>
          <Icon name='calendar' />
          Start {moment(this.props.user.start_date).format('MMM Do')} / End {moment(this.props.user.end_date).format('MMM Do')}
        </Card.Content>
      </Card>
      </div>
    )
  }

}

export default Timer;
