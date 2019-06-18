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
        <Card.Content header='Today I feel:' />
        <div className='content'>
          <select class="ui dropdown">
            <option value="">Mood</option>
            <option value="10">10 - I know everything!</option>
            <option value="9">9 - Doing awesome</option>
            <option value="8">8 - All caught up</option>
            <option value="7">7 - 7</option>
            <option value="6">6 - 6</option>
            <option value="5">5 - Keeping up (this is the bar)</option>
            <option value="4">4 - 4</option>
            <option value="3">3 - 3</option>
            <option value="2">2 - Panic mode</option>
            <option value="1">1 - I know nothing!</option>
          </select>
         </div>
        <Card.Content extra>
          <Icon name='smile' />
          Select your mood
        </Card.Content>
      </Card>
      </div>
    )
  }

}

export default Mood;
