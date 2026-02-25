/*export default function page() {
  let name = "Inchara"
  return (
    <div>{`Hello ${name}`}</div>
  )
}
//output:Hello Inchara

import Image from "next/image";

export default function Page() {
  let name = "Inchara"
  return (
    <div style={{ color: "blue", backgroundColor: "yellow", textAlign: "center" }}>
      <div>{`Hello ${name}`}</div>
      <Image src="/image.png" width={200} height={200} alt="My Image" />
    </div>
  );
}
  */
/*
import Image from "next/image"
import Link from "next/link"
export default function Page() {
 // let name = "Inchara";

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee",
      }}
    >

      <div
        style={{
          color: "blue",
          backgroundColor: "yellow",
          textAlign: "center",
          padding: "20px",
          width: "250px",
        }}
      >
        <div>{`Hello ${name}`}</div>
        <br />
        <Image src="/image.png" width={200} height={200} alt="My Image" />
      </div>
    </div>
  );
}*/



/*export default function page(){
  let name="Inchara P Jain"
  return(
    <div style={{backgroundColor:"violet",height:"100vh"}}>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}>
    <Image src={img} alt="image" width={100} height={100} style={{borderRadius:"50%"}}/>
    <br />
    <div style={{color:"blue"}}>{`${name}`}</div>
    <p style={{color:"blue"}}>{`Age: 21`}</p>
    <p style={{color:"blue"}}>{`Skills: JavaScript, React, Next.js,c++,python`}</p>
   <div>
    <Link href='/about'>About Us</Link>
    </div>
    </div>
 </div>
  )
}

export function UserData({name,role}){
  return(
    <div>
      <h3>{name}</h3>
      <h2>{role}</h2>
    </div>
  )
}
export default function page(){
  return (
    <div>
      <div style={{backgroundColor:"violet",height:"100vh"}}>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}>
      <UserData name="Inchara" role="Developer"/>
      <UserData name="Suma" role="Tester"/>
      <UserData name="Neha" role="Tester"/>
      </div>
    </div>
  )
}
*/
/*
import Image from "next/image"
import img from "../public/image.png"
import Link from "next/link"
function Userdata({ name, role }) {
  return (
    <div style={{ display: "inline-block", margin: 20 }}>
      <div
        style={{
          height: 220,
          width: 190,
          backgroundColor: "white",
          padding: 10,
          textAlign: "center",
          borderRadius: 10
        }}
      >
        <Image src="/image.png" alt="profile" width={100} height={100} />
        <p style={{ fontSize: 14, fontWeight: "bold" }}>{name}</p>
        <p style={{ fontSize: 12 }}>{role}</p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div style={{ backgroundColor: "#f2f2f2", minHeight: "100vh", padding: 20 }}>
      <div style={{ marginBottom: 20 }}>
        <Link href="/about" style={{ marginRight: 15, color: "pink" }}>
          About
        </Link>
        <Link href="/contact" style={{ marginRight: 15, color: "pink" }}>
          Contact
        </Link>
      </div>

      <Userdata name="Inchara" role="Web Dev" />
      <Userdata name="Apeksha" role="Full Stack" />
      <Userdata name="Shreya" role="Data Analytics" />
    </div>
  );
}

const [txt,setTxt]=useState('')
  const changeTxt=()=>{
    setTxt('Heil!!')

<h2 onClick={changeTxt}>{`value ${txt}`}</h2>
  */





//use state hook
'use client';
import { useState } from "react";
import React from "react";






/*
export default function page(){
  const [clr, setclr] = useState({color:"blue"});
  const changecolor=()=>{
    setclr({color:"red"});
  }
  return(
    <div>
      <h1 style={clr}>Hello</h1>
      <button onClick={changecolor}>Change Text</button>
    </div>
  )
}
  */
/*
export default function page(){
  const [count,setcount]=useState(0);
  var increment=()=>{
    setcount(count+1);
  }
  return(
    <div>
      <button onClick={increment}>Like</button>
      <h1>{count}</h1>
    </div>
  );
}

*/

// 1. Counter App (`useState`)

// Features:

// * Increment
// * Decrement
// * Reset
// * Prevent negative numbers
/*
export default function Counter() {
  const [count, setCount] = useState(0);

   const increment = () => setCount(count + 1);
   const decrement = () => {
     if (count > 0) setCount(count - 1);
   };
   const reset = () => setCount(0);

   return (
     <div>
       <h2>Count: {count}</h2>
       <button onClick={increment}>+</button>
       <br/>
       <button onClick={decrement}>-</button>
       <br/>
       <button onClick={reset}>Reset</button>
     </div>
   );
  }
*/
 // 3. Toggle Button (`useState` Boolean)
 //Show / Hide Message
/*
export default function Exercise3() {
   const [show, setShow] = useState(false);
   return (
     <div>
       <button onClick={() => setShow(!show)}>
         {show ? "Hide" : "Show"}
       </button>

       {show && <p>This text is visible!</p>}
     </div>
   );
 }
*/
//Name Display
/*
export default function Exercise1() {
    const [text, setText] = useState('');
    const[name,setName]=useState('');
    function nameSet()
    {
        setName(text);
    }
    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}style={{border:'1px solid pink'}}></input>
            <button onClick={nameSet}>set</button>
            <h6 > hello,{name}</h6>
        </div>
    )
}
*/

//Click Counter
/*export default function Exercise2() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={increment}>Click me</button>
            <h6>Button clicked {count} times</h6>
        </div>
    )
}
*/

//Change Background Color
/*export default function Exercise3() {
    const [color,setColor]=useState('white');
    function changeColor()
    {
        setColor(color==='white'?'lightblue':'white');
    }
    return (
        <div style={{backgroundColor:color,height:'100vh'}}>
            <button onClick={changeColor}>Change Background Color</button>
        </div>
    )
}
*/

//Character Counter
/*export default function Exercise4() {
    const [text, setText] = useState('');
    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} style={{border:'1px solid pink'}}></input>
            <h6>Character Count: {text.length}</h6>
        </div>
    )
}
*/

//Simple Age Checker
/*export default function Exercise5() {
    const [age,setAge]=useState('');
    function checkAge()    {
        if(age<18)
        {
            alert('You are a minor');
        }
        else
        {
            alert('You are an adult');
        }
    }
    return (
        <div>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} style={{border:'1px solid pink'}}></input>
            <button onClick={checkAge}>Check Age</button>
        </div>
    )
}
*/

/*
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <nav className="bg-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-lg">
            MyShop
          </div>

          <div className="hidden sm:flex space-x-6 text-gray-300">
            <a href="#" className="hover:text-white">Dashboard</a>
            <a href="#" className="hover:text-white">Projects</a>
            <a href="#" className="hover:text-white">Calendar</a>
          </div>
        </div>
      </nav>

      <div className="flex justify-center items-center mt-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-96 text-center">

          <img
            src="https://img.freepik.com/free-photo/cute-cat-spending-time-outside_23-2150649152.jpg?semt=ais_user_personalization&w=740&q=80"
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
          />

          <h2 className="text-xl font-bold text-gray-800">
            Erin Lindford
          </h2>

          <p className="text-gray-500 mb-6">
            Cat Shop Owner
          </p>

          <button className="w-full border border-purple-500 text-purple-600 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition">
            Buy your favorite cat at a great price
          </button>
        </div>
      </div>

    </main>
  );
}
  */
/*
export default function CartPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">

        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          🛒 Project Cart
        </h1>
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="Project 1"
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <h2 className="font-semibold text-gray-800">
                AI Chatbot Project
              </h2>
              <p className="text-gray-500 text-sm">₹1500</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="px-3 py-1 border rounded-md">1</span>
            <span className="font-semibold">₹1500</span>
            <button className="text-red-500 hover:underline">
              Remove
            </button>
          </div>
        </div>

        
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837"
              alt="Project 2"
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <h2 className="font-semibold text-gray-800">
                E-Commerce Website
              </h2>
              <p className="text-gray-500 text-sm">₹2000</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="px-3 py-1 border rounded-md">1</span>
            <span className="font-semibold">₹2000</span>
            <button className="text-red-500 hover:underline">
              Remove
            </button>
          </div>
        </div>

        
        <div className="flex justify-between items-center mt-6">
          <h2 className="text-lg font-semibold">Total</h2>
          <span className="text-xl font-bold">₹3500</span>
        </div>

        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Checkout
        </button>

      </div>
    </main>
  );
}
*/
export default function Page() {
  return (

  <div style={{border:'4px solid pink',padding:20}}>
  <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://img.freepik.com/free-photo/cute-cat-spending-time-outside_23-2150649152.jpg?semt=ais_user_personalization&w=740&q=80"
            alt="Profile" />
  <div class="space-y-2 text-center sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg font-semibold text-black">Erin Lindford</p>
      <p class="font-medium text-gray-500">Cat Shop Owner</p>
    </div>
    <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
     Buy your favorite cat at a great price
    </button>
  </div>
</div>
</div>

  );
}