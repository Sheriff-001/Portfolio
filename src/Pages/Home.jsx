import React from 'react'
import LargeHeader from '../Components/LargeHeader'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Experience from '../Components/Experience'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import MoreProject from './MoreProject'

// const arr = [{
//   name: 'first',
//   age: 4,
//   desc: "dfed fd dg dg dg gd g dg f  sf  dg   f  gg  d f fs "
// },{
//   name: 'second',
//   age: 4,
//   desc: "dfed fd dg dg dg gd g dg f  sf  dg   f  gg  d f fs "
// },{
//   name: 'third',
//   age: 4,
//   desc: "dfed fd dg dg dg gd g dg f  sf  dg   f  gg  d f fs "
// },{
//   name: 'forth',
//   age: 4,
//   desc: "dfed fd dg dg dg gd g dg f  sf  dg   f  gg  d f fs "
// },]


function Home() {
  return (
    <>
      <LargeHeader />
      <About />
      <Experience />
      <Projects />
      <Contact />
      {/* <Footer /> */}


      {/* {arr.map((item) =>(

        <div key={item.name}><p>{item.name}</p> <p>{item.age}</p> <p>{item.desc}</p></div>

      ))} */}
    </>
  )
}

export default Home