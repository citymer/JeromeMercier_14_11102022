import React from 'react'
import MaterialTable from 'material-table'
import tableIcons from '../utils/IconProvider.js'
import { employeesList } from '../datas/employees.js'

const columns = [
  { title: 'Firstname', field: 'firstname' },
  { title: 'Lastname', field: 'lastname' },
  { title: 'Start Date', field: 'startdate' },
  { title: 'Departement', field: 'departement' },
  { title: 'Date of Birth', field: 'dateOfBirth' },
  { title: 'Street', field: 'street' },
  { title: 'City', field: 'city' },
  { title: 'State', field: 'state' },
  { title: 'Zip Code', field: 'zipcode' },
]

const BasicTable = () => {
  return (
    <MaterialTable
      title="Current Employees"
      columns={columns}
      data={employeesList}
      icons={tableIcons}
    />
  )
}

export default BasicTable
