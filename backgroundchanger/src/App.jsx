import React, { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");
  const RedChange = () =>{
    setColor("red");
  }
  const BlueChange = () =>{
    setColor("blue");
  }
  return (
    <div
      className="  h-screen w-screen flex justify-center items-end  "
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap bg-white gap-3 text-white px-3 py-4 rounded-3xl">
        <button onClick={RedChange} className="px-2 rounded-full" style={{backgroundColor:"red"}}>Red</button>
        <button onClick={BlueChange} className="px-2 rounded-full" style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=> setColor("green")} className="px-2 rounded-full" style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=> setColor("olive")} className="px-2 rounded-full" style={{backgroundColor:"olive"}}>Olive</button>
        <button onClick={()=> setColor("yellow")} className="px-2 rounded-full text-black" style={{backgroundColor:"yellow"}}>Yellow</button>
      </div>
    </div>
  );
}
export default App;
