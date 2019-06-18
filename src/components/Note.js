import React, {Component} from 'react';
import { Card, Icon } from 'semantic-ui-react'
import ToDoItem from './ToDoItem';


class Note extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //
  //   }
  // }



  render() {
    return (
      <div className="post-it">
        <div>{this.props.category.title}</div>
      </div>
    )
  }

}

export default Note;
