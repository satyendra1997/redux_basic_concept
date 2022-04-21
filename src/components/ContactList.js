import React from "react";
import { connect } from "react-redux";
import Contact from "./Contact";
import { deleteContact } from "./actions/contactActions";
const ContactList = (props) => {
  console.log(props.contacts);
  //const { firstName, lastName, phone } = props;
  const contacts = props.contacts;
  const handleDeleteContact = (id) => {
    props.dispatch(deleteContact(id));
  };
  return (
    <div className="contacts-table">
      {contacts.length > 0 ? (
        <table className="tb">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Remove Contact</th>
          </tr>

          {contacts.map((contact) => {
            const { id, firstName, lastName, phone } = contact;

            return (
              <Contact
                key={id}
                firstName={firstName}
                lastName={lastName}
                phone={phone}
                id={id}
                handleDeleteContact={handleDeleteContact}
              />
            );
          })}
        </table>
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    contacts: state,
  };
};
export default connect(mapStateToProps)(ContactList);
