// App.js
import React, { useState } from "react";
import Form1 from "./Form";

const App = () => {
  const [uyeler, setUyeler] = useState([
    { name: "Kadir Aydin", email: "whyalwaysme@hotmail.com", role: "Boss" },
    {
      name: "Burak Cevizli",
      email: "crazy_boy@hotmail.com",
      role: "CEO",
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
            <strong>İsim:</strong> {member.name}, <strong>Email:</strong>{" "}
            {member.email}, <strong>Görev:</strong> {member.role}
          </li>
        ))}
      </ul>
      <h2>Add New Member</h2>
      <Form1 addMember={addMember} />
    </div>
  );
};

export default App;
