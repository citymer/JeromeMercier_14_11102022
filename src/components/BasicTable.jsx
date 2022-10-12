import React from 'react';
import MaterialTable from 'material-table';
import tableIcons from '../utils/IconProvider.js';


const data = [
    { firstname:"olivier",lastname:"fraise",startdate:"12/10/2022",
    departement:"Sales",dateofbirth:"14/04/1963",street:"origan",
    city:"menthe",state:"AZ",zipcode:"54123"}, 

    { firstname:"eliv",lastname:"laise",startdate:"1/10/2022",
    departement:"Sales",dateofbirth:"4/04/1963",street:"origan",
    city:"mouthe",state:"AZ",zipcode:"54123"}]

const columns = [
    { title: "Firstname", field: "firstname"},
    { title: "Lastname", field: "lastname"},
    { title: "Start Date", field: "startdate"},
    { title: "Departement", field: "departement"},
    { title: "Date of Birth", field: "dateofbirth"},
    { title: "Street", field: "street"},
    { title: "City", field: "city"},
    { title: "State", field: "state"},
    { title: "Zip Code", field: "zipcode"},
    ]

const BasicTable = () => {
    return (
      <MaterialTable 
        title="Current Employees" 
        columns={columns} 
        data={data} 
        icons={tableIcons}/>
    );
};

export default BasicTable;