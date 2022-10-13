import React from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <Header />
            <div className='contenth2'>
            <h2>Erreur 404</h2>

            </div>
            <div className='link'>
            <Link className='lien' to="/">Home</Link>
            </div>
        </div>
    );
};

export default Error404;