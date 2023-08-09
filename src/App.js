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
    <div className="member-bar">
      <h1>Team Members</h1>
      <ul className="ul-bar">
        {uyeler.map((member, index) => (
          <li key={index} className="li-tagi">
            <h2>
              <strong>İsim:</strong> {member.name}
            </h2>
            <h2>
              <strong>Email:</strong>
              {member.email}
            </h2>
            <h2>
              <strong>Görev:</strong> {member.role}
            </h2>
          </li>
        ))}
      </ul>
      <h2>Add New Member</h2>
      <Form1 addMember={addMember} />
    </div>
  );
};

export default App;
