import React from 'react'
import PropTypes from 'prop-types'


const Navbar = ({title, icon}) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon}
      </h1>
    </div>
  )
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

  Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
  }
export default Navbar;