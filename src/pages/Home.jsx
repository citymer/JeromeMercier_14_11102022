import React from 'react';
import Header from '../components/Header';
import ButtonCurrent from '../components/ButtonCurrent';

const Home = () => {
    return (
        <div>
            <Header/>
            <main>
                <ButtonCurrent/>
                <section className='formulaire'>
                    <h1>Create Employee</h1>
                </section>
            </main>
        </div>
    );
};

export default Home;