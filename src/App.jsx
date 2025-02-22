import Footer from "./components/Footer"
import Greet from "./components/Greet"
import Header from "./components/Header"
import Home from "./components/Home"

function App() {
  return <>
    <Greet/>
    <Header/>
    <Home/>
    <Footer/>
    <h1>Hello world</h1>
  </>
  // return <User
  //           name = "abhihsek"
  //           age = {1}
  //           sec = "male"
  //       />
}

// import React from 'react'

// const User = (props) => {
//   return (
//     <div>{props.name}</div>
//   )
// }

export default App