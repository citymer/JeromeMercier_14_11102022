import React, { useContext } from 'react'
import MaterialTable from 'material-table'
import tableIcons from '../utils/IconProvider.js'
import { DataContext } from '../utils/context.jsx'
import { columns } from '../utils/colums'

/**
 * builds a table with employee data
 * @returns the table of employees
 */

const BasicTable = () => {
  const { employeesData } = useContext(DataContext)

  return (
    <MaterialTable
      title="Current Employees"
      columns={columns}
      data={employeesData}
      icons={tableIcons}
    />
  )
}

export default BasicTable
