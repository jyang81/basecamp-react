import React, {Component} from 'react';
import { Card, Icon } from 'semantic-ui-react'
import Note from './Note'
import NoteModal from '../modals/NoteModal';



class NoteBoard extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //
  //   }
  // }



  render() {
    return (
      <div className="div5" >
        <Card fluid className="fullsize" >
          <Card.Content header='Notes' />
            <div className='list'>
            {this.props.user.note_categories.map(category => {
              return (
                <Note key={category.id} category={category} />
              )
            })}
            </div>
          <Card.Content extra>
            <NoteModal user={this.props.user} createNote={this.createNote}/>
          </Card.Content>
        </Card>

      </div>
    )
  }

}

export default NoteBoard;
