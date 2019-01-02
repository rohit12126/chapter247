import React from 'react';

const ContactDetailsComponent = (props) => {
  return (
    <div>
      <h2>Contact details</h2>
      <br/>
      <p>Name: {props.data.name}</p>
      <p>Number: {props.data.number}</p>
    </div>
  );
}

export default ContactDetailsComponent;