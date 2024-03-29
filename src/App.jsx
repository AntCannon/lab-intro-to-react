import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.jsx";
import UserProfile from "./Components/UserProfile.jsx";
import userData from "./data/userData.js";
import Posts from "./Components/Posts.jsx";
import userPosts from "./data/userPosts.js";

function App() {
  // console.log(`App-userPosts`, userPosts);

  return (
    <>
      <NavBar />
      <UserProfile user={userData} />
      <Posts userPosts={userPosts} />
    </>
  )
}

export default App;
