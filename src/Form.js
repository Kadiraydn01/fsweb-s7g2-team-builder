import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Form1 = ({ addMember }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && role) {
      addMember({ name, email, role });
      setName("");
      setEmail("");
      setRole("");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <FormGroup>
        <Label htmlFor="user-name">isim:</Label>
        <Input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <br />
      <FormGroup>
        <Label htmlFor="user-mail">Email:</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <br />
      <FormGroup>
        <Label htmlFor="user-role">Görev:</Label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </FormGroup>
      <br />
      <Button type="submit">Add Member</Button>
    </Form>
  );
};

export default Form1;
