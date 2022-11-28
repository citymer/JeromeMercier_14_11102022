import React from 'react'
import { NavLink } from 'react-router-dom'

/**
 * builds a button
 * @returns a button
 */

const ButtonCurrent = () => {
  return (
    <div className="link">
      <NavLink className="lien" to="/current-employees">
        View Current Employees
      </NavLink>
    </div>
  )
}

export default ButtonCurrent
