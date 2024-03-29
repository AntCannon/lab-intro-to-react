import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.jsx";
import UserProfile from "./Components/UserProfile.jsx";
import userData from "./data/userData.js";
import Posts from "./Components/Posts.jsx";
import userPosts from "./data/userPosts.js";
import Contacts from "./Components/Contacts.jsx";
import contactsList from "./data/contactsList.js";

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <UserProfile user={userData} />
        <Posts userPosts={userPosts} />
        <Contacts contactsList={contactsList} />
      </main>
    </>
  )
}

export default App;
