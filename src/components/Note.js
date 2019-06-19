import React, {Component} from 'react';
// import { Card, Icon } from 'semantic-ui-react'
import NoteItemModal from '../modals/NoteItemModal';


class Note extends Component {
  // state = {
  //   notes: []
  // }
  //
  // componentWillMount(){
  //   this.setState({
  //     notes: this.props.category.notes
  //   })
  // }

  render() {
    return (
      <NoteItemModal
        user={this.props.user}
        category={this.props.category}
        deleteSticky={this.props.deleteSticky}
      />
    )
  }

}

export default Note;
