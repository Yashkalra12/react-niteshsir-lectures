import React, { useState } from 'react';

function App() {
  const [luckyNumber, setLuckyNumber] = useState("yash");

  const generateLuckyNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
    setLuckyNumber(randomNumber);
  };

  return (
    <div>
      <LuckyNumber luckyNumber={luckyNumber} />
      <MyName />
      <button onClick={generateLuckyNumber}>Generate Lucky Number</button>
    </div>
  );
}

function LuckyNumber({ luckyNumber }) {
  return <p>My lucky number is {luckyNumber}</p>;
}

function MyName() {
  return <p>My name is Yash Kalra</p>;
}

export default App;


// import React, { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     async function fetchData(api) {
//       try {
//         let response = await fetch(api);
//         let data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData("https://jsonplaceholder.typicode.com/posts");
//   }, []); 

//   return (
//     <>
//       <h1>use Effect</h1>
//       <div className='container'>
//         {posts.map((post, index) => (
//           <Onepost key={index} title={post.title} />
//         ))}
//       </div>
//     </>
//   );
// }

// function Onepost(props) {
//   return (
//     <li>{props.title}</li>
//   );
// }

// export default App;
