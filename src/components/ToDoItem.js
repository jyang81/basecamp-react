import React, {Component} from 'react';
import { Card, Icon, Checkbox } from 'semantic-ui-react'
import moment from 'moment'


class ToDoItem extends Component {
  constructor() {
    super()
    this.state = {
      checked: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(ev) {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    let item = this.state.checked ?
    <Card className="strike checklist" color='green'>
      <Card.Content>
        <div><Icon link name='close' color='grey' size='large' className="top-right" onClick={() => {this.props.deleteToDo(this.props.to_do.id)}} /></div>
        <Card.Header><Checkbox onClick={this.handleClick} checked /> {this.props.to_do.item}</Card.Header>
        <Card.Meta>
          <span className='indent'>{this.props.to_do.category}</span>
        </Card.Meta>
        <Card.Description>
          <span className='indent'>Due: {moment(this.props.to_do.due_date).format('dddd, MMM Do')}</span>
        </Card.Description>
      </Card.Content>
    </Card>
    :
    <Card className='checklist' color='orange'>
      <Card.Content>

        <Card.Header><Checkbox onClick={this.handleClick} /> {this.props.to_do.item}</Card.Header>
        <Card.Meta>
          <span className='indent'>{this.props.to_do.category}</span>
        </Card.Meta>
        <Card.Description>
          <span className='indent'>Due: {moment(this.props.to_do.due_date).format('dddd, MMM Do')}</span>
        </Card.Description>
      </Card.Content>
    </Card>
    return (
      <>{item}</>
    )
  }

}

export default ToDoItem;
