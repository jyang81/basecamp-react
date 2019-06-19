import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form, List } from 'semantic-ui-react'

class NoteItemModal extends Component {
  state = {
    open: false,
    notes: []
  }

  componentWillMount(){
    this.setState({
      notes: this.props.category.notes
    })
  }

  closeModal = () => {
    this.setState({ open: false })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.createNoteItem(ev)
    ev.target.reset()
  }

  createNoteItem = (ev) => {
    fetch(URL + 'notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.jwt
      },
      body: JSON.stringify({note: {
        content: ev.target.elements["content"].value,
        note_category_id: this.props.category.id
      }})
    })
    .then(res => res.json())
    .then(note => {
      console.log("created note:", note)
      this.setState({
        notes: [...this.state.notes, note]
      })
    })
    .catch(error => console.error(error))
  }

  deleteNote = (id) => {
    fetch(`${URL}notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + localStorage.jwt
      }
    })
    .then(res => res.text())
    .then(this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    }))
  }

  render() {
    const {open} = this.state
    return (
      <Modal size="small"
        onClose={this.closeModal}
        open={open}
        trigger={<div
          className="post-it"
          onClick={() => this.setState({ open: true })}>
         {this.props.category.title}</div>}
        closeIcon >
        <Header className='yellow-bg' icon='pin' content={this.props.category.title} />
        <Modal.Content className='yellow-bg' scrolling>
          <List divided relaxed verticalAlign='middle'>
            {this.state.notes.map(note => {
              return (
                <List.Item key={note.id}>
                  <List.Content floated='right'>
                    <Icon link name='close' inverted color='grey' onClick={() => {this.deleteNote(note.id)}} />
                  </List.Content>
                  <Icon size='small' name='square' />
                  <List.Content >
                    <List.Header>{note.content}</List.Header>
                  </List.Content>
                </List.Item>
              )
            })}
          </List>
        </Modal.Content>
        <Modal.Content className='yellow-bg'>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Note</label>
              <input name="content" placeholder='Thoughts, Ideas, Links, etc.' />
            </Form.Field>
            <Button color='blue' type='submit'>
              <Icon name='plus' /> Add Note
            </Button>
          </Form>
        </Modal.Content>
        <Modal.Actions className='yellow-bg'>
          <Button color='red' onClick={() => {this.props.deleteSticky(this.props.category.id)}}>
            <Icon name='remove' /> Delete Sticky
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

}

export default NoteItemModal;
