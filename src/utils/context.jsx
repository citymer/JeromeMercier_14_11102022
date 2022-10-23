import React, { createContext, useState } from 'react'
import { employeesList } from '../datas/employees'

export const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [employeesData, setEmployeesData] = useState(employeesList)

  const addEmployees = (form) => {
    setEmployeesData((employeesData) => [...employeesData, form])
  }
  return (
    <DataContext.Provider value={{ employeesData, addEmployees }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
