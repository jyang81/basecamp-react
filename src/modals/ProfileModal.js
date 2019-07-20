import React, { Component } from 'react'
import { Segment, Dropdown, Header, Modal } from 'semantic-ui-react'
import { schoolOptions, courseOptions } from '../components/Signup.js'

class ProfileModal extends Component {
  state = {
    school: "",
    course: null
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

  handleChange = (course) => {
    this.setState({
      course: this.courseId(course)
    })
  }

  courseId = (course) => {
    switch (course) {
      case "Software Engineering Immersive":
        return 1
      case "Software Engineering Online":
        return 2
      case "Data Science":
        return 3
      case "UX/UI Design":
        return 4
      default:
        return 1
    }
  }

  render() {
    return (
      <Modal size="small"
        onClose={this.props.closeModal}
        open={this.props.open}
        closeIcon >
        <Header icon='edit' content='Edit Profile' />
        <Modal.Content scrolling>
          <div>

          <div className="form-container-2">
            <Segment>
                <form className="ui form formMargin" onSubmit={this.createUser}>
                  <div className="required field">
                    <label>Name</label>
                    <input className="ui input" type="text" name="name" placeholder="Enter your name" />
                  </div>
                  <div className="required field">
                    <label>Email</label>
                    <input className="ui input" type="text" name="email" placeholder="Enter your email" ref={this.props.email} />
                  </div>
                  <div className="required field">
                    <label>Password</label>
                    <input className="ui input" type="password" name="password" placeholder="Enter Password" ref={this.props.password} />
                  </div>
                  <div className="required field">
                    <label>Confirm Password</label>
                    <input className="ui input" type="password" name="password_confirmation" placeholder="Re-enter Password" />
                  </div>
                  <div className="required field">
                    <label>School</label>
                    <Dropdown
                      placeholder='Select your school'
                      fluid
                      selection
                      options={schoolOptions}
                      onChange={(ev) => {this.setState({
                        school: ev.target.textContent
                        })
                      }}
                    />
                  </div>
                  <div className="required field">
                    <label>Course</label>
                    <Dropdown
                      placeholder='Select your course'
                      fluid
                      selection
                      options={courseOptions}
                      onChange={(ev) => {this.handleChange(ev.target.textContent)}}
                    />
                  </div>
                  <div className="required field">
                    <label>Start Date</label>
                      <div className="ui calendar">
                        <div className="ui input left icon">
                          <i className="calendar alternate icon"></i>
                          <input type="date" name="start_date" />
                        </div>
                      </div>
                  </div>
                  <div className="required field">
                    <label>End Date</label>
                      <div className="ui calendar">
                        <div className="ui input left icon">
                          <i className="calendar alternate icon"></i>
                          <input type="date" name="end_date" />
                        </div>
                      </div>
                  </div><br/>
                  <div id="error"></div>
                  <div className="centered"><button type="submit" className="ui primary button">Submit</button></div>
                </form>
            </Segment>
          </div>
          </div>
        </Modal.Content>
      </Modal>
    )
  }

}

export default ProfileModal;
