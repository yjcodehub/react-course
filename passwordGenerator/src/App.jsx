import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+-`{}[]';:><.,/?"; // 33-126 Ascii values between
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1)); // +1 added, if value becomes 0 it will considered as 1
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const textTransform = useCallback(() => {
    if (uppercase) setPassword(password.toUpperCase());
    if (lowercase) setPassword(password.toLowerCase());
    console.log(password);
  }, [uppercase, lowercase, password, setPassword, setUppercase, setLowercase]);

  useEffect(() => {
    if (lowercase || uppercase) textTransform();
    else if (charAllowed || numberAllowed || length) passwordGenerator();
  }, [length, charAllowed, numberAllowed, lowercase, uppercase]);

  return (
    <>
      <div className="w-full max-w-3xl mx-auto px-4 py-3 my-8 rounded-lg shadow-lg bg-gray-700 text-orange-500">
        <h1 className="text-center text-white mb-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipBoard}
            className="outline-none bg-blue-500 text-white hover:bg-blue-700 px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-lg gap-x-6">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={uppercase}
              id="uppercase"
              onChange={() => {
                setUppercase((prev) => !prev);
              }}
            />
            <label htmlFor="uppercase">Uppercase</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={lowercase}
              id="lowercase"
              onChange={() => {
                setLowercase((prev) => !prev);
              }}
            />
            <label htmlFor="lowercase">Lowercase</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
