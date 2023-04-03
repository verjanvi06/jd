import React from 'react'
import BestSellers from '../../components/BestSellers/bestSellers'
import Category from '../../components/Category/category'
import Collection from '../../components/collection/collection'
import Footer from '../../components/Footer/footer'
import ForYou from '../../components/ForYou/forYou'
import Gender from '../../components/Gender/gender'
import Header from '../../components/Header/header'
import Slider from '../../components/Slider/slider'
// import Hero from '../../components/Hero/hero'
import Testimonial from '../../components/Testimonail/testimonial'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      {/* <Hero></Hero> */}
      <Category></Category>
      <Collection></Collection>
      <Testimonial></Testimonial>
      <ForYou></ForYou>
      <BestSellers></BestSellers>
      <Gender></Gender>
      <Footer></Footer>

    </div>
  )
}

export default Home
