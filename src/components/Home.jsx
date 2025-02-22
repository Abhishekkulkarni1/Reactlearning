import React from 'react'

const products = [
    {
        name: "laptop",
        model: "acer",
        type: "best"
    },
    {
        name: "phone",
        model: "samsong",
        type: "betest"
    },
    {
        name: "hehe",
        model: "sahhuehemsong",
        type: "betoksyest"
    }
]

// const numbers = [1, 2, 3, 4, 5, 67]
const Home = () => {
    // return (
    //     <div>
    //         {products.map(({model, name, type})=> (
    //             <ul>
    //                 <li>{model}</li>
    //                 <li>{name}</li>
    //                 <li>{type}</li>
    //             </ul>
    //         ))}
    //     </div>
    // )
    return <User
        name = "abhihsek"
        age = {12}
        sex = "male"
    />
}

const User = ({name, age, sex}) => {
    return <div>
       <h1>{name}</h1> 
       <h1>{age}</h1> 
       <h1>{sex}</h1> 
    </div>
}

export default Home