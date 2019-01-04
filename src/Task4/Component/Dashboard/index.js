import React,{Component} from 'react';

class Dashboard extends Component{
    render(){
        console.log(this.props.data)
        const detail = this.props.data.map((element, index) => {
            return <tr key = {index} style={{margin: '10px'}}>
                   <td onClick = {(e) => this.props.handelShow(element)}>{element.name}</td>
                   <td className={"btn btn-danger"}onClick = {(e) => this.props.handleDelete(index)}>Delete</td>
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
                        {detail}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Dashboard;