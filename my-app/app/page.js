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
