import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { addContact } from "./actions/contactActions";
const ContactForm = (props) => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [errormsg, setErrormsg] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(contact);
    //console.log(event.target.value);
    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, phone } = contact;
    if (firstName !== "" && lastName !== "" && phone !== "") {
      console.log(firstName, lastName, phone);
      props.dispatch(
        addContact({
          id: uuidv4(),
          firstName,
          lastName,
          phone,
        })
      );
      props.history.push("/contactlist");
      setErrormsg("");
    } else {
      setErrormsg("All the fields are required.");
    }
  };
  return (
    <div className="contactForm">
      <form onSubmit={handleOnSubmit}>
        <p className="errormsg">{errormsg}</p>
        <label>
          Name:
          <br />
          <input
            type="text"
            name="firstName"
            value={contact.firstName}
            onChange={handleChange}
          />
          <br />
          <br />
        </label>
        <label>
          Last Name:
          <br />
          <input
            type="text"
            name="lastName"
            value={contact.lastName}
            onChange={handleChange}
          />
          <br />
          <br />
        </label>
        <label>
          Phone:
          <br />
          <input
            type="Number"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
          />
          <br />
          <br />
        </label>
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default connect()(ContactForm);
