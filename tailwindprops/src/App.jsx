import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let userObj = {
    userName: "Yash",
    age: 26,
  };
  let newArr = [1, 2, 3];
  return (
    <>
      <h4 className="text-black bg-red-500 p-2 rounded-xl font-bold mb-3">
        Hello world!
      </h4>
      <Card
        userName="Yash"
        description="This is Yash Jais. Learning react js"
        btnText="CLick Me"
        imgSrc="https://images.unsplash.com/photo-1715590876582-18e4844864a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
      />
      <Card
        userName="Jais"
        description="Learning react js"
        btnText="Visit Profile"
        imgSrc="https://images.unsplash.com/photo-1715188243751-0b2bb62139be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTR8fHxlbnwwfHx8fHw%3D"
      />
    </>
  );
}

export default App;
