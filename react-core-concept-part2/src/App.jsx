import Counter from './counter';
import BatsMan from './batsMan';
import Users from './Users';
import './App.css'

function App() {

  function handleClick() {
    alert("I am clicked")
  }
  const handleClick3 = () => {
    alert("click me 3")
  }

  return (
    <>

      <h1>Vite + React</h1>
      <Users></Users>
      <BatsMan></BatsMan>
      <Counter></Counter>


      <button onClick={function handleClick1() {
        alert("clicked 1")
      }}>Click me</button>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick3}>click me</button>

      <button onClick={() => alert("click 4")}>click me 4</button>
    </>
  )
}

export default App
