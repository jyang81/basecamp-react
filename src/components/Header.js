import React from 'react';
import { Dropdown, Image } from 'semantic-ui-react'

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

  const options = [
    { key: 'user', text: 'Edit Profile', icon: 'user' },
    { key: 'sign-out', text: 'Log Out', icon: 'sign out', onClick: props.logOut }
  ]

    return (
      <div className="div6">
        <div>BaseCamp logo</div>
        <div><Image src={schoolLogo(props.user.school)} avatar /> {props.user.school}: {props.user.course.name}</div>
        <div><Dropdown trigger={trigger} options={options} pointing='top right' icon={null} /></div>
      </div>
    )


}

export default Header;
