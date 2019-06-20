import React, {Component} from 'react';
import { Card, Icon } from 'semantic-ui-react'

class Mood extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //   }
  // }




  render() {
    return (
      <div className="div2">
      <Card fluid className="fullsize">
        <Card.Content header='Daily Mood' />
        <Card.Content className="no-top-line">
        <div className='content'>
          <select className="ui dropdown">
            <option value="">Select Your Mood</option>
            <option value="10">10 - I should be teaching!</option>
            <option value="9">9 - Relax Day</option>
            <option value="8">8 - Learning is fun!</option>
            <option value="7">7 - Comfortable- All caught up</option>
            <option value="6">6 - Just barely keeping up</option>
            <option value="5">5 - Playing catch up</option>
            <option value="4">4 - I have so much to do!</option>
            <option value="3">3 - Stressed out, but not panicking</option>
            <option value="2">2 - Starting to panic!</option>
            <option value="1">1 - What am I doing here?!</option>
          </select>
         </div>
       </Card.Content>
        <Card.Content extra>
          <Icon name='smile' />
          How do you feel today?
        </Card.Content>
      </Card>
      </div>
    )
  }

}

export default Mood;
