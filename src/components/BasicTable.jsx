import React, { useContext } from 'react'
import MaterialTable from 'material-table'
import tableIcons from '../utils/IconProvider.js'
import { DataContext } from '../utils/context.jsx'
import { columns } from '../utils/colums'
import { ThemeProvider, createTheme } from '@mui/material'

/**
 * builds a table with employee data
 * @returns the table of employees
 */

const BasicTable = () => {
  const { employeesData } = useContext(DataContext)
  const defaultMaterialTheme = createTheme()

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
        title="Current Employees"
        columns={columns}
        data={employeesData}
        icons={tableIcons}
        options={{
          rowStyle: (data, index) =>
            index % 2 === 0 ? { background: '#74a7e5' } : null,
        }}
      />
    </ThemeProvider>
  )
}

export default BasicTable
