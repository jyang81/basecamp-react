import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form, List, Confirm } from 'semantic-ui-react'
import Signup from '../components/Signup';

// THIS IS NOT WORKING YET

class ProfileModal extends Component {
  state = {

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


  render() {
    return (
      <Modal size="small"
        onClose={this.props.closeModal}
        open={this.props.open}

        closeIcon >
        <Header icon='edit' content='Edit' />
        <Modal.Content scrolling>
          <Signup />
        </Modal.Content>
      </Modal>
    )
  }

}

export default ProfileModal;
