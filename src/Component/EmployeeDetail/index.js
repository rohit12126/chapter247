import React,{ Component } from 'react';
import axios from 'axios';

class EmployeeDetail extends Component{
  constructor(){
    super()
    this.state = {
      user:''
    }
  }
  componentDidMount(){
    
  }
  render(){
    return(
      <>
        <p onClick={this.props.handleBack}>Back</p>
        <h2>Employee details</h2>
        <p>Name: {this.props.employee.name}</p>
        <p>Email: {this.props.employee.email}</p>
        <p>Website: {this.props.employee.website}</p>
        <p>Phone: {this.props.employee.phone}</p>
      </>
    )
  }
}

// const EmployeeDetail = (props) => {
//   return (
//     <div>
//       <br/>
//       <p onClick={props.handleBack}>Back</p>
//       <h2>Employee details</h2>
//       <p>Name: {props.employee.name}</p>
//       <p>Designation: {props.employee.designation}</p>
//       <p>Age: {props.employee.age}</p>
//     </div>
//   );
// }

export default EmployeeDetail;