import React from 'react'
import PropTypes from 'prop-types'



const Alert = ({title, icon}) => {
  return (
    <div className="navbar bg-primary">

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
export default Alert;