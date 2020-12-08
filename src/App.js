import React, { useState, useEffect } from "react";
import ProfileList from "./components/ProfileList";
import { Spinner } from "react-bootstrap";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ width: "100%", textAlign: "center", margin: "5rem auto" }}>
        <Spinner animation="border" />{" "}
      </div>
    );
  }

  return (
    
          <ProfileList users={users} />
        
  );
}

export default App;