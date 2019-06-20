import React, {Component} from 'react';
import { Card, Icon } from 'semantic-ui-react'
import HelpModal from '../modals/HelpModal'

const helpbutton = <HelpModal />


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
        <Card.Content header="In Case of Emergency" />
        <Card.Content className="no-top-line" description={helpbutton} />
        <Card.Content extra>
          <Icon name='exclamation circle' /> Click the button if you get stuck
        </Card.Content>
      </Card>
      </div>
    )
  }

}

export default Help;
