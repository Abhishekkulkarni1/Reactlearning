import React from 'react'

// const greetings = "Greetings hello"
// const date = new Date()
// const todaysDate = date.getDate()
// const month = date.getMonth()
// const year = date.getFullYear()
// const hours = date.getHours()
// const mins = date.getMinutes()
// const secs = date.getSeconds()

// const porperDate = `${todaysDate}/${month+1}/${year} ${hours}:${mins}:${secs}`
const handleClick = console.log(Math.floor(Math.random() * 10));

const Button = () => {
  return <button onClick={handleClick}></button>
}
const Greet = () => {
  return (
    <div>
        {/* <h1>{greetings}</h1>
        <p>{Date.now()}</p>
        <div>{porperDate}</div> */}
        <Button/>
    </div>
  )
}

export default Greet