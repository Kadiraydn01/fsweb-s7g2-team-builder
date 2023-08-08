// App.js
import React, { useState } from "react";
import Form from "./Form";

const App = () => {
  const [uyeler, setUyeler] = useState([
    { name: "Kadir Aydin", email: "crazy_boy@hotmail.com", role: "Patron" },
    {
      name: "Burak Cevizli",
      email: "whyalwaysme@hotmail.com",
      role: "Slave",
    },
  ]);

  const addMember = (newMember) => {
    setUyeler([...uyeler, newMember]);
  };

  return (
    <div>
      <h1>Team Members</h1>
      <ul>
        {uyeler.map((member, index) => (
          <li key={index}>
            <strong>Name:</strong> {member.name}, <strong>Email:</strong>{" "}
            {member.email}, <strong>Role:</strong> {member.role}
          </li>
        ))}
      </ul>
      <h2>Add New Member</h2>
      <Form addMember={addMember} />
    </div>
  );
};

export default App;
