import React, { useCallback, useEffect, useRef, useState } from "react";

const New_password = () => {
  const [length, setLength] = useState(10);
  const [char, setChar] = useState(false);
  const [number, setNumber] = useState(false);
  const [password, setPassword] = useState("");

  const copyPassword = useRef(null)

  const copyToClipboard = useCallback(() => {
    copyPassword.current?.select();
    copyPassword.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
  }, [password])

  const passwordGenerator = useCallback(() => {
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    let pass = "";
    if (char) str += "~!@#$%^&*_+";
    if (number) str += "1234567890";

    for (let i = 1; i <= length; i++) {
      let character = Math.floor(Math.random() * str.length + 1);
      // console.log(Math.random() );
      pass += str.charAt(character);
    }
    setPassword(pass);
  }, [length, char, number, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, char, number, passwordGenerator]);

  return (
    <div className="fixed inset-0  flex flex-col justify-center items-center text-white   bg-black ">
      <div className="flex flex-col justify-center items-center gap-4 bg-gray-500 w-120 h-50 rounded-xl shadow-lg">
        <h1>PASSWORD GENERATOR</h1>

        <div className="flex">
          <input
            type="text"
            name="Password"
            placeholder=" Password"
            value={password}
            className="text-zinc-950  bg-white h-9 rounded-l-md w-70 "
            ref={copyPassword}
          />
          <button className="bg-blue-500  text-white w-15 rounded-r-md hover:bg-blue-600"
          onClick={copyToClipboard}
        
          >
            Copy
          </button>
        </div>
        <div className="flex gap-2">
          <input
            type="range"
            name="length"
            id=""
            min={6}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label for="length">Length : {length} </label>

          <input
            type="checkbox"
            id="character"
            defaultChecked={char}
            value={char}
            onChange={() => setChar((prev) => !prev)}
          />
          <label htmlFor="character">Character</label>
          <input
            type="checkbox"
            id="number"
            defaultChecked={number}
            value={number}
            onChange={() => setNumber((prev) => !prev)}
          />
          <label htmlFor="number">Number</label>
        </div>
      </div>
    </div>
  );
};

export default New_password;
