import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import App from '../components/Faq'
import CustomerReview from '../components/CustomerReview'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
    <Hero />
    <FeaturedDestination />
    <App />
    <CustomerReview />
    <Footer/>
    </>
  )
}

export default Home
