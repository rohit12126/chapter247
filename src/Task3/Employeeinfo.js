import React,{Component} from 'react'
class Employeeinfo extends Component{
    render(){
        return(
            <table>
                <th>Name</th>
                <th>Qualification</th>
                <tr>
                    <td>{this.props.detail.name}</td>
                    <td>{this.props.detail.qualification}</td>
                </tr>
                    
                
                
            </table>
        )
    }
}
export default Employeeinfo;