import React from 'react';
import { Dropdown, Image } from 'semantic-ui-react'
// import ProfileModal from '../modals/ProfileModal'

const Header = (props) => {

  function schoolLogo(school) {
    switch (props.user.school) {
      case 'Flatiron School':
        return './images/fis.png'
      case 'Code Fellows':
        return './images/cf.png'
      case 'General Assembly':
        return './images/ga.png'
      case 'Galvanize':
        return './images/gv.jpg'
      default:
        return './images/fis.png'
    }
  }

  const trigger = (
    <span>
      <i className="small circular inverted red user icon"></i> {props.user.name}
    </span>
  )

  // function openModal() {
    // {() => this.setState({ open: true })}
  // }

  const options = [
    { key: 'user', text: 'Edit Profile', icon: 'user' },
    { key: 'sign-out', text: 'Log Out', icon: 'sign out', onClick: props.logOut }
  ]

    return (
      <div className="div6">
        <div><Image src='./images/bc-logo-horz.svg' alt='BaseCamp logo' /></div>
        <div><Image src={schoolLogo(props.user.school)} avatar /> {props.user.course.name} @ {props.user.school}</div>
        <div><Dropdown trigger={trigger} options={options} pointing='top right' icon={null} /></div>
      </div>
    )


}

export default Header;
