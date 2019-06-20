import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Segment, Dropdown } from 'semantic-ui-react'

const schoolOptions = [
  {
    key: "Flatiron School",
    text: "Flatiron School",
    value: "Flatiron School",
    image: { avatar: true, src: './images/fis.png' },
  },
  {
    key: "Code Fellows",
    text: "Code Fellows",
    value: "Code Fellows",
    image: { avatar: true, src: './images/cf.png' },
  },
  {
    key: "General Assembly",
    text: "General Assembly",
    value: "General Assembly",
    image: { avatar: true, src: './images/ga.png' },
  },
  {
    key: "Galvanize",
    text: "Galvanize",
    value: "Galvanize",
    image: { avatar: true, src: './images/gv.jpg' },
  }
]

const courseOptions = [
  {
    key: "Software Engineering Immersive",
    text: "Software Engineering Immersive",
    value: 1,
    icon: 'laptop',
  },
  {
    key: "Software Engineering Online",
    text: "Software Engineering Online",
    value: 2,
    icon: 'laptop',
  },
  {
    key: "Data Science",
    text: "Data Science",
    value: 3,
    icon: 'lab',
  },
  {
    key: "UX/UI Design",
    text: "UX/UI Design",
    value: 4,
    icon: 'sitemap',
  }
]

class Signup extends Component {

  state = {
    school: "",
    course: null
  }

  createUser = (ev) => {
    ev.preventDefault()
    fetch(URL + 'users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({user: {
        name: ev.target.elements.name.value,
        email: ev.target.elements.email.value,
        password: ev.target.elements.password.value,
        password_confirmation: ev.target.elements.password_confirmation.value,
        school: this.state.school,
        course_id: this.state.course,
        start_date: ev.target.elements.start_date.value,
        end_date: ev.target.elements.end_date.value
      }})
    })
    .then(res => res.json())
    .then(data => {
      console.log("1. created:", data)
      if (data && data.jwt) {
        this.saveToken(data.jwt)
        this.getProfile()
      } else {
        const error = document.getElementById("error")
        error.textContent = data.exception
      }
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

  saveToken(jwt) {
    localStorage.setItem('jwt', jwt)
  }

  getToken(jwt) {
    return localStorage.getItem('jwt')
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

  handleChange = (course) => {
    this.setState({
      course: this.courseId(course)
    })
  }

  render() {
    return (
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
                <input className="ui input" type="password" name="password" placeholder="Password" ref={this.props.password} />
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
              <div className="centered"><button type="submit" className="ui primary button">Sign Up</button></div>
            </form>
            <div className="centered"><Link to="/login">Back to Log In</Link></div>
        </Segment>
      </div>
    )
  }


}

export default Signup;


// ==== OLD CODE =====

// <label>School</label>
// <select className="ui selection dropdown" name="school">
//   <option>Select your school</option>
//   <option value="Flatiron School">Flatiron School</option>
//   <option value="Code Fellows">Code Fellows</option>
//   <option value="General Assembly">General Assembly</option>
//   <option value="Galvanize">Galvanize</option>
// </select>

// <div className='inline field'>Start <input type="date" name="start_date" /></div>
// <div className='inline field'>End <input type="date" name="end_date" placeholder="End Date" /></div>
// <div className="required field">
//   <label>Course</label>
//   <select name="course_id">
//     <option>Select your course</option>
//     <option value="1">Software Engineering Immersive</option>
//     <option value="2">Software Engineering Online</option>
//     <option value="3">Data Science</option>
//     <option value="4">UX/UI Design</option>
//   </select>
// </div>
