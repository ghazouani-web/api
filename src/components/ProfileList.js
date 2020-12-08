import React from "react";
import { Col } from "react-bootstrap";
import UserCard from "./UserCard";


const ProfileList = ({ users }) => {
  return (
    <div>
        {users.map((user) => (
          <Col key={user.id}>
            <UserCard user={user}   />
          </Col>
          
        ))}
     </div>
  );
};

export default ProfileList;