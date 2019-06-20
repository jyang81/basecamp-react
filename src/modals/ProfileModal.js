import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form, List, Confirm } from 'semantic-ui-react'

// THIS IS NOT WORKING YET

class ProfileModal extends Component {
  state = {
    open: false,
    showConfirm: false,
  }


  closeModal = () => {
    this.setState({ open: false })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.updateUser(ev)
    ev.target.reset()
  }

  updateUser = (ev, user, id) => {
    ev.preventDefault()
    fetch(`${URL}users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log("1. updated:", data)
    })
  }

  getProfile = () => {
    let token = this.getToken()
    fetch(URL + 'profile', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log("2. get profile:", data.user)
      this.props.setUser(data)
    })
  }

  deleteUser = (id) => {
    fetch(`${URL}users/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + localStorage.jwt
      }
    })
    .then(res => res.text())
    .then(this.setState({
      user: {}
    }))
  }

// ====== Confirm actions ===========

  show = () => this.setState({ showConfirm: true })
  handleConfirm = () => {
    this.props.deleteSticky(this.props.category.id)
    this.setState({ showConfirm: false })
  }
  handleCancel = () => this.setState({ showConfirm: false })

  render() {
    const {open} = this.state
    return (
      <Modal size="small"
        onClose={this.closeModal}
        open={open}
        trigger={<div
          onClick={() => this.props.openModal}>
         {this.props.category.title}</div>}
        closeIcon >
        <Header className='yellow-bg' icon='pin' content={this.props.category.title} />
        <Modal.Content className='yellow-bg' scrolling>
          <List divided relaxed verticalAlign='middle'>
            {this.state.notes.map(note => {
              return (
                <List.Item key={note.id}>
                  <List.Content floated='right'>
                    <Icon link name='close' inverted color='grey' onClick={() => {this.deleteUser(note.id)}} />
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
              <label>Note Item</label>
              <input name="content" placeholder='Thoughts, Ideas, Links, etc.' />
            </Form.Field>
            <Button color='blue' type='submit'>
              <Icon name='plus' /> Add Note Item
            </Button>
          </Form>
        </Modal.Content>
        <Modal.Actions className='yellow-bg'>
          <Button color='red' onClick={this.show}>
            <Icon name='remove' /> Delete Note
          </Button>
          <Confirm
            open={this.state.showConfirm}
            content='Are you sure you want to delete this note?'
            onCancel={this.handleCancel}
            onConfirm={this.handleConfirm}
            size='tiny'
          />
        </Modal.Actions>
      </Modal>
    )
  }

}

export default ProfileModal;
