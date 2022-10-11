import React from 'react';
import Header from '../components/Header';
import ButtonCurrent from '../components/ButtonCurrent';
import Formulaire from '../components/Formulaire';

const Home = () => {
    return (
        <div>
            <Header/>
            <main>
                <ButtonCurrent/>
                <section className='formulaire'>
                    <h1>Create Employee</h1>
                    <Formulaire/>
                </section>
            </main>
        </div>
    );
};

export default Home;