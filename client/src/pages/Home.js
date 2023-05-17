import React from 'react'
import "./Home.css"
import Footer from '../components/user/HomeComponents/Footer'
import Contents from '../components/user/HomeComponents/Contents'
// import Testimonial from '../components/user/HomeComponents/Testimonial'
import About from '../components/user/HomeComponents/About'
const Home = () => {
  return (
    <div>
      <Contents/>
      {/* <Testimonial/> */}
      <About/>
      <Footer/>
    </div>
  )
}

export default Home
