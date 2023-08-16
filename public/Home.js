import React from "react";
import { BrowserRouter } from "react-router-dom";

function Home() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <h1>I'M HUNGRY</h1>
      <img
        src="https://i.giphy.com/pBj0EoGSYjGms.gif"
        alt="Audrey II wants to eat."
      />
    </div>
  );
}

export default Home;
