import React, { Component } from 'react'
import { Segment, Header, Modal } from 'semantic-ui-react'
// import { schoolOptions } from '../components/Signup.js'

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

  updateUser = (ev) => {
    ev.preventDefault()
    fetch(`${URL}users/${this.props.user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.jwt
      },
      body: JSON.stringify({user: {
        name: ev.target.elements.name.value,
        email: ev.target.elements.email.value,
        // password: ev.target.elements.password.value,
        // password_confirmation: ev.target.elements.password_confirmation.value,
        school: ev.target.elements.school.value,
        course_id: ev.target.elements.course_id.value,
        start_date: ev.target.elements.start_date.value,
        end_date: ev.target.elements.end_date.value
      }})
    })
    .then(res => res.json())
    .then(data => {
      console.log("1. updated:", data)
    })
    .catch(error => {
      console.log("error", error)
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

  // handleChange = (event) => {
  //   this.setState({
  //     user: { [event.target.name]: event.target.value}
  //   })
  //   console.log(this.state);
  // }
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
                  <div>
                    <label>Password</label>
                    <input className="ui input" type="password" name="password"  ref={this.state.password} />
                  </div>
                  <div>
                    <label>Confirm Password</label>
                    <input className="ui input" type="password" name="password_confirmation" />
                  </div>
                  <div>
                    <label>School</label>
                      <select className="ui selection dropdown" name="school" defaultValue={this.state.user.school} >
                        <option value="Flatiron School">Flatiron School</option>
                        <option value="Code Fellows">Code Fellows</option>
                        <option value="General Assembly">General Assembly</option>
                        <option value="Galvanize">Galvanize</option>
                      </select>
                  </div>
                  <div>
                    <label>Course</label>
                      <select className="ui selection dropdown" name="course_id" defaultValue={this.state.user.course_id} >
                        <option value="1">Software Engineering Immersive</option>
                        <option value="2">Software Engineering Online</option>
                        <option value="3">Data Science</option>
                        <option value="4">UX/UI Design</option>
                      </select>
                  </div>
                  <div className="required field">
                    <label>Start Date</label>
                      <div className="ui calendar">
                        <div className="ui input left icon">
                          <i className="calendar alternate icon"></i>
                          <input type="date" name="start_date"
                            defaultValue={this.state.user.start_date}
                             />
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
