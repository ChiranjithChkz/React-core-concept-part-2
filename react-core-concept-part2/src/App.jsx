import Counter from './counter';
import BatsMan from './batsMan';
import Users from './Users';
import friends from './friends';
import Posts from './posts';
import Photos from './photos';
import Players from './players';
import './App.css'
import { Suspense } from 'react';

 


// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users") //1//
//   .then(res => res.json());


  // const fetchFriends = async() => {  //** */
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   return res.json();

  // }

  // const fetchPosts = async() =>{
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   return res.json();
  // }


  const fetchPhotos = async() =>{  //1.1 set up api
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    return res.json();
  }
  
function App() {


  // const friendsPromise = fetchFriends(); //** */
  // const postsPromise = fetchPosts();

  const photosPromise = fetchPhotos();// 1.1call the function


  function handleClick() {
    alert("I am clicked")
  }
  const handleClick3 = () => {
    alert("click me 3")
  }

  return (
    <>

      <h1>Vite + React</h1>

      <Players></Players>

{/* 

        <Suspense fallback={<h1>Photo is loading...</h1>}>
             <Photos photosPromise={photosPromise}></Photos>
        </Suspense>  *1.1 then suspense */}


{/*       
         <Suspense fallback={<h5>Post are coming ...</h5>}> 
         <Posts postsPromise={postsPromise}></Posts>
         </Suspense> */}




      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

{/* 
       <Suspense fallback={<h3>Friends are coming for treat...</h3>}> 
        <Friends friendsPromise={friendsPromise}></Friends>
       </Suspense> */}
    
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
