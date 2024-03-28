import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.jsx";
import UserProfile from "./Components/UserProfile.jsx";
import userData from "./data/userData.js";

function App() {
  console.log(`App-userData`,userData);

  return (
    <>
      <NavBar />
      <UserProfile user={userData} />
    </>
  )
}

export default App;
