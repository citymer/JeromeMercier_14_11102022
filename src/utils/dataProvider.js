import React, { createContext } from 'react'
import { employeesData } from '../components/Formulaire'

export const DataContext = createContext()
console.log(employeesData)
const DataProvider = (props) => {
  return <DataContext.Provider value={employeesData}></DataContext.Provider>
}

export default DataProvider
