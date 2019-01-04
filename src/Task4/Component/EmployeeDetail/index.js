import React from 'react';

const EmployeeDetail = (props) => {
  return (
    <div className="panel" style={{width: '40rem',margin:'0 auto'}}>

    <div className="panel-body">
      <h5 className="panel-title">Employee Detail</h5><br/>
      <p className="panel-text"><b>Name:</b>{props.data.name}</p>
      <p className="panel-text"><b>Position:</b>{props.data.Position}</p>
      <p className="panel-text"><b>Contact Number:</b>{props.data.contactNumber}</p>
      <p className="panel-text"><b>Email Id:</b>{props.data.emailId}</p>
      <button onClick={props.handleBack}class="btn btn-primary">Back</button>
    </div>
  </div>
    // <div>
    //   <br/>
    //   <p >Back</p>
    //   <h2>Employee details</h2>
    //   <p>Name: {props.data.name}</p>
    //   <p>Designation: {props.data.designation}</p>
    //   <p>Age: {props.employee.age}</p>
    // </div>
  );
}

export default EmployeeDetail;