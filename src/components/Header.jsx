import React from 'react'

// let temp = 24
const user = false
const admin = true

const Header = () => {
   {/* <div>
        <h1>Header</h1>
        <nav>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="" >Contact</a>
        </nav> 
    </div> */}
    // if(temp < 15) {
    //   return <h1>cold</h1>
    // } else if (temp > 15 && temp < 25) {
    //   return <h1>nice</h1>
    // } else {return <h1> hot</h1>
    // }
    if (user&&admin) {
      return <h1>both are true</h1>
    }else if(user){
      return <h1>welcome user</h1>
    } else{
      return <h1>welcome admin</h1>
    }
}

// const Header = () => {
//   <Prop
//   temp = {15}
//   />
// }

export default Header