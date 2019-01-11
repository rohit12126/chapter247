import React from 'react';

const EmployeeDetail = (props) => {
  console.log(props)
  return (
    <div className="panel" style={{width: '40rem',margin:'0 auto'}}>

    <div className="panel-body">
      <h5 className="panel-title">Employee Detail</h5><br/>
      <p className="panel-text"><b>User Id:</b>{props.data.userid}</p>
      <p className="panel-text"><b>Id:</b>{props.data.id}</p>
      <p className="panel-text"><b>Title:</b>{props.data.title}</p>
      <p className="panel-text"><b>Completed:</b>{props.data.completed}</p>
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