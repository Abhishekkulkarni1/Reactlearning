import Footer from "./components/Footer"
import Greet from "./components/Greet"
import Header from "./components/Header"
import Home from "./components/Home"

// const ValidPassword = () => <h1>valid password hai</h1>
// const InvalidPassword = () => <h1>invalid password hai</h1>

// const Password = ({isValid}) => {
//   if(isValid) {return <ValidPassword/>}
//   else return <InvalidPassword/>
// }
// const items = ["hitem1", "hitem2", "hitem3", "hitem4"]
// const Cart = () => {
//   return (
//     <h1>Cart
//       <h1>You have {items.length} items in your cart</h1>
//       <ul>Product are as follows
//         {items.map((products)=> (
//           <li key={Math.random()}>{products}</li>
//         ))}
//       </ul>
//     </h1>

//   )
// }
const handleClick = () => console.log("button clicked");
const Button = () => {
  // const handleClick = console.log(Math.round(Math.random() * 100));
  return (<button onClick={handleClick}></button>)
}


const mouseHandler = () => {console.log("teri makei")};
const Move = () => {
  return (<p onMouseMove={ mouseHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum modi fugiat nisi ab incidunt illo voluptate, excepturi at eveniet ex.</p>)
}
// function App() {
//   return (
//     <main>
//       {/* <Greet/> */}
//       {/* <Header/> */}
//       {/* <Home user="morning" admin={""}/> */}
//       {/* 
//     <Footer/>
//     <h1>Hello world</h1>  
//     <Password
//       isValid = {false}
//     /> */}
//       {/* <Cart/> */}
//       <Move />
//     </main>
//   )
// }
const App = () => {
  return <section><Move /> <img src="" alt="" /> <Button/> </section>
}

export default App