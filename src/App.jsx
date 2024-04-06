import React, { useState } from 'react';

function App() {
  return (
    <div>
      <Namewithbutton />
      <StaticLine />
    </div>
  );
}

function Namewithbutton() {
  const [luckyNumber, setLuckyNumber] = useState(null);

  const generateLuckyNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setLuckyNumber(randomNumber);
  };

  return (
    <div>
      <button onClick={generateLuckyNumber}>Generate Lucky Numbers</button>
      <LuckyNumber luckyNumber={luckyNumber} />
    </div>
  );
}

function LuckyNumber({ luckyNumber }) {
  return <p>My lucky number is {luckyNumber}</p>;
}

function StaticLine() {
  return <p>This line doesn't need to be re-rendered</p>;
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
