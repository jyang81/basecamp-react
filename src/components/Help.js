import React, {Component} from 'react';
import { Card, Icon } from 'semantic-ui-react'

class Help extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //   }
  // }



  render() {
    return (
      <div className="div3">
      <Card fluid className="fullsize">
        <Card.Content header="HELP" />
        <Card.Content description='Click here if you get stuck' />
        <Card.Content extra>
          <Icon name='exclamation circle' />
        </Card.Content>
      </Card>
      </div>
    )
  }

}

export default Help;
