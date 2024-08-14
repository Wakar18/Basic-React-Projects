import { useCallback, useEffect, useState,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbers] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}][]";
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length+1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbersAllowed, charAllowed]);


  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[])

  useEffect(() => {
    generatePassword();
  }, [length, numbersAllowed, charAllowed]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md text-orange-500 px-4 py-3 my-7 bg-gray-700 rounded">
        <h1 className="text-2xl text-white text-center">Password Generator</h1>

        <div className="flex shadow bg-white rounded-lg overflow-hidden mb-4">
          <input className="outline-none" ref={passwordRef} value={password} type="text" readOnly placeholder="Password" />
          <button onClick={copyPassword}  className="px-3 py-0.5 ml-auto text-white bg-blue-600 outline-none">
            Copy
          </button>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            value={length}
            min={1}
            max={20}
            type="range"
            className="cursor-pointer"
            id="length"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="length"> Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numbersAllowed}
            id="Num"
            onChange={() => {
              setNumbers(!numbersAllowed);
            }}
          />
          <label htmlFor="Num">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllowed}
            id="Char"
            onChange={() => {
              setChar(!charAllowed);
            }}
          />
          <label htmlFor="Char">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
