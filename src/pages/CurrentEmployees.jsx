import React from 'react';
import BasicTable from '../components/BasicTable';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const CurrentEmployees = () => {
    return (
        <div>
            <Header/>
            <div className='contentTable'>
            <BasicTable/>
            </div>
            <div className='link'>
            <Link className='lien' to="/">Home</Link>
            </div>
        </div>
    );
};

export default CurrentEmployees;