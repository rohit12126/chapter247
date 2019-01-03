import React,{Component} from 'react'
class Employeedetail extends Component{
    render(){
        return(
            <table>
                <th>Name</th>
                <th>Position</th>
                <th>Contact Number</th>
                <th>EmailId</th>
                <tr>
                    <td>{this.props.detail.name}</td>
                    <td>{this.props.detail.Position}</td>
                    <td>{this.props.detail.contactNumber}</td>
                    <td>{this.props.detail.emailId}</td>
                </tr>
                    
                
                
            </table>
        )
    }
}
export default Employeedetail;