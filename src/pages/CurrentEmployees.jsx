import React from 'react'
import BasicTable from '../components/BasicTable'
import Header from '../components/Header'
import { NavLink } from 'react-router-dom'

/**
 * function that create the current-employees page with its components
 * @returns the current-employees page html
 */
const CurrentEmployees = () => {
  return (
    <div>
      <Header />
      <div className="contentTable">
        <BasicTable />
      </div>
      <div className="link">
        <NavLink className="lien" to="/">
          Home
        </NavLink>
      </div>
    </div>
  )
}

export default CurrentEmployees
