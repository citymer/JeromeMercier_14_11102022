import React from 'react'
import { Link } from 'react-router-dom'

/**
 * builds a button
 * @returns a button
 */

const ButtonCurrent = () => {
  return (
    <div className="link">
      <Link className="lien" to="/current-employees">
        View Current Employees
      </Link>
    </div>
  )
}

export default ButtonCurrent
