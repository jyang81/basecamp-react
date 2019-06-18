import React, {Component} from 'react';
// import { Card, Icon } from 'semantic-ui-react'
import NoteItemModal from '../modals/NoteItemModal';



class Note extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //
  //   }
  // }

  createNoteItem = (ev) => {
    console.log("new note item");
  }

  render() {
    return (
      <NoteItemModal
        user={this.props.user}
        createNoteItem={this.createNoteItem}
        title={this.props.category.title}
        />

    )
  }

}

export default Note;

// <div
//   className="post-it">
//   <div>{this.props.category.title}</div>
// </div>
