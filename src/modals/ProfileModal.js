import React, { Component } from 'react'
import { Segment, Dropdown, Header, Modal } from 'semantic-ui-react'
import { schoolOptions } from '../components/Signup.js'

class ProfileModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        name: this.props.user.name,
        email: this.props.user.email,
        school: this.props.user.school,
        course_id: this.props.user.course.id,
        start_date: this.props.user.start_date,
        end_date: this.props.user.end_date
      }
    }
    console.log("constructor:", this.state);
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
      body: JSON.stringify({user: {
        name: this.state.name,
        email: this.state.email,
        // password: ev.target.elements.password.value,
        // password_confirmation: ev.target.elements.password_confirmation.value,
        school: this.state.school,
        course_id: this.state.course_id,
        start_date: ev.target.elements.start_date.value,
        end_date: ev.target.elements.end_date.value
      }})
    })
    .then(res => res.json())
    .then(data => {
      console.log("1. updated:", data)
    })
  }

  // getProfile = () => {
  //   let token = this.getToken()
  //   fetch(URL + 'profile', {
  //     headers: {
  //       'Authorization': 'Bearer ' + token
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log("2. get profile:", data.user)
  //     this.props.setUser(data)
  //   })
  // }

  deleteUser = (id) => {
    fetch(`${URL}users/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + localStorage.jwt
      }
    })
    .then(res => res.text())
    .then(this.setState({
      user: {
      }
    }))
  }

  // handleChange = (course) => {
  //   this.setState({
  //     course: this.courseId(course)
  //   })
  // }

  handleChange = (event) => {
    this.setState({
      user: { [event.target.name]: event.target.value}
    })
    console.log(this.state);
  }
  //
  // courseId = (course) => {
  //   switch (course) {
  //     case "Software Engineering Immersive":
  //       return 1
  //     case "Software Engineering Online":
  //       return 2
  //     case "Data Science":
  //       return 3
  //     case "UX/UI Design":
  //       return 4
  //     default:
  //       return 1
  //   }
  // }

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
                <form className="ui form formMargin" onSubmit={this.updateUser}>
                  <div className="required field">
                    <label>Name</label>
                    <input className="ui input" type="text" name="name" defaultValue={this.state.user.name} onChange={this.handleChange} />
                  </div>
                  <div className="required field">
                    <label>Email</label>
                    <input className="ui input" type="text" name="email" defaultValue={this.state.user.email} ref={this.props.email} onChange={this.handleChange} />
                  </div>
                  <div className="required field">
                    <label>Password</label>
                    <input className="ui input" type="password" name="password"  ref={this.state.password} />
                  </div>
                  <div className="required field">
                    <label>Confirm Password</label>
                    <input className="ui input" type="password" name="password_confirmation" />
                  </div>
                  <div className="required field">
                    <label>School</label>
                    <Dropdown
                      fluid
                      selection
                      options={schoolOptions}
                      name="school"
                      defaultValue={this.state.user.school}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="required field">
                    <label>Course</label>
                    <select className="ui selection dropdown"
                      defaultValue={this.props.user.course.name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="required field">
                    <label>Start Date</label>
                      <div className="ui calendar">
                        <div className="ui input left icon">
                          <i className="calendar alternate icon"></i>
                          <input type="date" name="start_date"
                            defaultValue={this.state.user.start_date}
                            onChange={this.handleChange} />
                        </div>
                      </div>
                  </div>
                  <div className="required field">
                    <label>End Date</label>
                      <div className="ui calendar">
                        <div className="ui input left icon">
                          <i className="calendar alternate icon"></i>
                          <input type="date" name="end_date"
                            defaultValue={this.state.user.end_date}
                            onChange={this.handleChange}
                            />
                        </div>
                      </div>
                  </div><br/>
                  <div id="error"></div>
                  <div className="centered"><button type="submit" className="ui primary button">Update Profile</button></div>
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
