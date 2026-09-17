import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import MovieCard from '../components/MovieCard'
import Movies from './Movies'
import RandomPicks from '../components/RandomPicks'

const Home = () => {
  return (
    <>
        <main>
            <Hero />

            <RandomPicks />
        </main>
    </>
  )
}

export default Home