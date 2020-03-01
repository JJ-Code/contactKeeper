import React from 'react'
import PropTypes from 'prop-types'


const Navbar = ({title, icon}) => {
  return (
    <div>
      hi hi
    </div>
  )
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

  Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-'
  }
export default Navbar;