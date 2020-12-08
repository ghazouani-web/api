import React from 'react'
import { Card, Button } from "react-bootstrap";
import "../App.css"

const avatar = {
    background: "blue",
    borderRadius: "5%",
    color: "white",
    padding: "1px",
    margin: "30px",
    textAlign: "center",
  };
  
  function toInitials(str) {
    return str
      .trim()
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join("");
  }
function UserCard({user}) {
    
    return (
        <div >
        <Card style={{ width: "100%", margin: "15px" }}   >
      <div className="text-center m-4">
        <span style={avatar}> {toInitials(user.name)} </span>
      </div>

      <Card.Body >
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>{user.phone}</Card.Text>
        <Card.Text>{user.address.city}</Card.Text>
        <Card.Text className="text-muted">{"@" + user.username}</Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    )
}

export default UserCard
