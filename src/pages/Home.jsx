import React from 'react'
import Header from '../components/Header'
import ButtonCurrent from '../components/ButtonCurrent'
import Formulaire from '../components/Formulaire'

/**
 * function that creates the home page with its components
 * @returns the Home page HTML
 */

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <ButtonCurrent />
        <section className="formulaire">
          <h1>Create Employee</h1>
          <Formulaire />
        </section>
      </main>
    </div>
  )
}

export default Home
