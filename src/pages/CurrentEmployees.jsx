import React from 'react';
import BasicTable from '../components/BasicTable';
import Header from '../components/Header';

const CurrentEmployees = () => {
    return (
        <div>
            <Header/>
            <div className='contentTable'>
            <BasicTable/>
            </div>
        </div>
    );
};

export default CurrentEmployees;