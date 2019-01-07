import React, { Component } from 'react';

const PersonDetail = (props) => {
  console.log(props + 'detail');
  return (
    <div className="person-detail col-md-6 m-0" >
      <button className="btn btn-danger" onClick={props.handleBack}>Back</button>
      <div className="pb-5"></div>
      <p><span>Person Id</span>{props.data.id}</p>
      <p><span>Person Name</span>{props.data.name}</p>
      <p><span>Person Age</span>{props.data.age}</p>
    </div>
  )
}

export default PersonDetail;