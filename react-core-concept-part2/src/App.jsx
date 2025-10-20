import Counter from './counter';
import BatsMan from './batsMan';
import Users from './Users';
import friends from './friends';
import './App.css'
import { Suspense } from 'react';
import Friends from './friends';


const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users") //1//
  .then(res => res.json());


  const fetchFriends = async() => {  //** */
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();

  }
  
function App() {


  const friendsPromise = fetchFriends(); //** */


  function handleClick() {
    alert("I am clicked")
  }
  const handleClick3 = () => {
    alert("click me 3")
  }

  return (
    <>

      <h1>Vite + React</h1>
      
         
      
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

       <Suspense fallback={<h3>Friends are coming for treat...</h3>}> 
        <Friends friendsPromise={friendsPromise}></Friends>
       </Suspense>
    
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
