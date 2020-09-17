import React, {Component} from 'react';
import { Card, Icon, Progress } from 'semantic-ui-react'
import moment from 'moment'

class Timer extends Component {

  getTimeRemaining = (end) => {
    let t = Date.parse(end) - Date.parse(new Date());
    let days = Math.floor( t/(1000*60*60*24) + 1);
    return days
  }

  completedTime = () => {
    let start = Date.parse(this.props.user.start_date)
    let end = Date.parse(this.props.user.end_date)
    let today = Date.parse(new Date())
    let percent = Math.floor(((today - start)/(end - start))*100)
    return percent
  }

  render() {
    return (
      <div className="div1">
        <Card fluid className="fullsize">
          <Card.Content header='Days Left' />
          <Card.Content className="no-top-line counter">
            {this.getTimeRemaining(this.props.user.end_date)}
          </Card.Content>
          <Card.Content className="small-height">
            <Progress percent={this.completedTime()} color='blue' progress />
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
