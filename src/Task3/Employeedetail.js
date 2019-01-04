import React,{Component} from 'react'
import List from './List'
class Employeedetail extends Component{
    constructor(props){
        super(props)
        this.state={
            back:false,
            show:true
        }
    }
    handelClick = () =>{
        this.setState({
            back:true,
            show:false
        })
    }
    render(){
        return(
            <div>
                {this.state.show ? 
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
                            <button className="btn-btn-primary"onClick={this.handelClick}>Back</button>
                        </tr>
                    </table>
                    :""
                }
                {this.state.back ?<List />:""}     
             </div>
        )
    }
}
export default Employeedetail;