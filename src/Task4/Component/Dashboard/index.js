import React,{Component} from 'react';
import  './Dashboard.css'
class Dashboard extends Component{
    render(){
        console.log(this.props.data)
        const detail = this.props.data.map((element, index) => {
            return <tr key = {index} style={{margin: '10px'}}>
                   <td onClick = {(e) => this.props.handelShow(element)}>{element.name}</td>
                   <td>	
                       <button className={"btn btn-primary"} onClick = {(e) => this.props.handelShow(element)}>View</button>&nbsp;
                        <button className={"btn btn-danger"} onClick = {(e) => this.props.handleDelete(index)}>Delete</button>
                    </td>
                </tr>
        })
        return(
            <div>
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    <tbody>
                        {detail}
                    </tbody>
                   
                </table>
                <center><button type="button" className="btn btn-primary" onClick={(e) => this.props.handleAdd(e)}>Add contact</button></center>
   
            </div>
        )
    }
}

export default Dashboard;