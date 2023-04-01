import React from 'react'
import BestSellers from '../../components/BestSellers/bestSellers'
import Collection from '../../components/collection/collection'
import Footer from '../../components/Footer/footer'
import Gender from '../../components/Gender/gender'
import Header from '../../components/Header/header'
import Hero from '../../components/Hero/hero'
import Testimonial from '../../components/Testimonail/testimonial'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Collection></Collection>
      <Testimonial></Testimonial>
      <BestSellers></BestSellers>
      <Gender></Gender>
      <Footer></Footer>

    </div>
  )
}

export default Home
