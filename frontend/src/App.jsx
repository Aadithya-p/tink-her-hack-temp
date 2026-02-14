import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/firebase";

import Login from "./components/login";
import SignUp from "./components/SignUp";
import Profile from "./pages/profile";
import Activity from "./pages/activity";
import BottomNav from "./components/bottomnav";
import Tasks from "./pages/tasks2";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("signup");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setCurrentPage("tasks");
      } else {
        setUser(null);
        setCurrentPage("signup");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="app-container">
      <div className="page-content">

        {currentPage === "signup" && (
          <SignUp setCurrentPage={setCurrentPage} />
        )}

        {currentPage === "login" && (
          <Login setCurrentPage={setCurrentPage} />
        )}

        {user && currentPage === "tasks" && <Tasks />}

        {user && currentPage === "activity" && <Activity />}

        {user && currentPage === "profile" && <Profile />}

      </div>

      {user && (
        <BottomNav setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}

export default App;
