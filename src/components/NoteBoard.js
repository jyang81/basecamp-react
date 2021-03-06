import React, {Component} from 'react';
import { Card, Icon } from 'semantic-ui-react'
import Note from './Note'
import NoteModal from '../modals/NoteModal';


class NoteBoard extends Component {
  state = {
    note_categories: []
  }

  componentDidMount(){
    this.setState({
      note_categories: this.props.user.note_categories
    })
  }

  createNote = (ev) => {
    fetch(URL + 'note_categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.jwt
      },
      body: JSON.stringify({note_category: {
        title: ev.target.elements["title"].value,
        notes: [],
        user_id: this.props.user.id
      }})
    })
    .then(res => res.json())
    .then(note_category => {
      console.log("created post-it:", note_category )
      this.setState({
        note_categories: [...this.state.note_categories, note_category]
      })
    })
    .catch(error => console.error(error))
  }

  deleteSticky = (id) => {
    fetch(`${URL}note_categories/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + localStorage.jwt
      }
    })
    .then(res => res.text())
    .then(this.setState({
      note_categories: this.state.note_categories.filter(note_category => note_category.id !== id)
    }))
  }

  render() {
    return (
      <div className="div5" >
        <Card fluid className="fullsize" >
          <Card.Content>
            <Card.Header>Notes <Icon inverted color='olive' name='sticky note' />
            </Card.Header>
          </Card.Content>
            <div className='list-container'>
            {this.state.note_categories.map(category => {
              return (
                <Note
                  key={category.id}
                  category={category}
                  deleteSticky={this.deleteSticky}
                />
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
