import React from "react";

const Contact = (props) => {
  const { firstName, lastName, id, phone } = props;
  const handleDelete = (event) => {
    event.preventDefault();
    props.handleDeleteContact(id);
  };
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
      <td>
        <a href="/#" onClick={handleDelete}>
          Remove
        </a>
      </td>
    </tr>
  );
};

export default Contact;
