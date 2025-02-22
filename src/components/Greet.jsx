import React from 'react'

const greetings = "Greetings hello"
const date = new Date()
const todaysDate = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()
const hours = date.getHours()
const mins = date.getMinutes()
const secs = date.getSeconds()

const porperDate = `${todaysDate}/${month+1}/${year} ${hours}:${mins}:${secs}`
const Greet = () => {
  return (
    <div>
        <h1>{greetings}</h1>
        <p>{Date.now()}</p>
        <div>{porperDate}</div>
    </div>
  )
}

export default Greet