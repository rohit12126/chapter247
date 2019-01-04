import React,{Component} from 'react';

class Dashboard extends Component{
    render(){
        const data = this.props.employee.map((element, index) => {
            return <tr key = {index}>
                   <td onClick = {(e) => this.props.handleClick(element)}>{element.name}</td>
                   <td onClick = {(e) => this.props.handleDelete(index)}>Delete</td>
                </tr>
        })
        return(
            <div>
                <button type="button" className="btn btn-primary" onClick={(e) => this.props.handleAdd(e)}>Add contact</button>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    <tbody>
                        {data}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Dashboard;