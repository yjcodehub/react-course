import { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-white");
  return (
    <>
      <div className={`w-full h-screen duration-200 ${color}`}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="px-4 py-2 rounded-full bg-red-500 font-bold shadow-lg"
              onClick={() => setColor("bg-red-500")}
            >
              Red
            </button>
            <button
              className="px-4 py-2 rounded-full bg-green-500 font-bold shadow-lg"
              onClick={() => setColor("bg-green-500")}
            >
              Green
            </button>
            <button
              className="px-4 py-2 rounded-full bg-blue-500 font-bold shadow-lg"
              onClick={() => setColor("bg-blue-500")}
            >
              Blue
            </button>
            <button
              className="px-4 py-2 rounded-full bg-yellow-500 font-bold shadow-lg"
              onClick={() => setColor("bg-yellow-500")}
            >
              Yellow
            </button>
            <button
              className="px-4 py-2 rounded-full bg-black font-bold shadow-lg text-white"
              onClick={() => setColor("bg-black")}
            >
              Black
            </button>
            <button
              className="px-4 py-2 rounded-full bg-white font-bold shadow-lg text-black"
              onClick={() => setColor("bg-white")}
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
