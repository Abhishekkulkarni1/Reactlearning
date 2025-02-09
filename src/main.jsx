import { createRoot } from "react-dom/client"
// import "./App.css"
import "./index.css"
import NavbarEg from "./components/navbar.jsx"
import reactLogo from "./assets/react.svg"

function ReactHTML() {
  return (
    <>
      <img src={reactLogo} alt="" width={"40px"} />
      <h1>React fun facts</h1>
      <ul>
        <li>Hey</li>
        <li>There</li>
        <li>Abhishek</li>
        <li>Here</li>
      </ul>
    </>
  )
}

const root = createRoot(document.getElementById("root")).render(
  <div>
    <ReactHTML />
  </div>
)