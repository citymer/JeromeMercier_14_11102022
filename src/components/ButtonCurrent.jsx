import React from 'react';
import { Link } from 'react-router-dom';


const ButtonCurrent = () => {
    return (
        <div className='link'>
            <Link className='lien' to="/current-employees">View Current Employees</Link>
        </div>
    );
};

export default ButtonCurrent;