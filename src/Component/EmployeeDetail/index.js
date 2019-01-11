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
    console.log(this.props.userId);
    console.log('this.props.userId');
    axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.userId}`).then(response => {
        console.log(response.data);
        this.setState({
          user:response.data
        })
      }).catch(error => {
        this.setState({
          error:error
        })
      })
  }
  render(){
    return(
      <>
        <p onClick={this.props.handleBack}>Back</p>
        <h2>Employee details</h2>
        <p>Name: {this.state.user.name}</p>
        <p>Email: {this.state.user.email}</p>
        <p>Website: {this.state.user.website}</p>
        <p>Phone: {this.state.user.phone}</p>
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