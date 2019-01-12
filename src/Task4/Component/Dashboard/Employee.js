import React,{Component} from 'react';
import  './Dashboard.css'
class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            persons:this.props.persons,
            currentPage: 1,
            todosPerPage: 10,
            loading:true
        }
    }
    handleClick =(event) => {
        this.setState({
          currentPage: Number(event.target.id)
        });
    }
    
    render(){
        console.log(this.props.persons)
        
        const persons=this.props.persons;
        console.log(persons)
        const { currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        var renderTodos = [];
        console.log(indexOfLastTodo,indexOfFirstTodo);
        
          const currentTodos = persons.slice(indexOfFirstTodo, indexOfLastTodo);
          console.log(currentTodos);
          renderTodos = currentTodos.map((user, index) => {
              
            return renderTodos.length <0 ?<img  src="loader.gif"/>:
            <tr key={index}><td >{user.id}</td>
                <td >{user.title}</td>
                <td>	
                      <button className={"btn btn-primary"} onClick = {(e) => this.props.handelShow(index)}>View</button>&nbsp;
                       <button className={"btn btn-danger"} onClick = {(e) => this.props.handleDelete(index)}>Delete</button>
                   </td>
                   </tr>
 
          });
        
        const pageNumbers = [];
        for (let i = 1; i <= 10; i++) {
          pageNumbers.push(
            <a class="page-link" id={i} onClick={this.handleClick}>{i}</a>
          );
        }
      
       

        // const detail = this.props.persons.map((element, index) => {
        //     return <tr key = {index} style={{margin: '10px'}}>
        //            <td onClick = {(e) => this.props.handelShow(element)}>{element.id}</td>
        //            <td onClick = {(e) => this.props.handelShow(element)}>{element.title}</td>
        //            <td>	
        //                <button className={"btn btn-primary"} onClick = {(e) => this.props.handelShow(element)}>View</button>&nbsp;
        //                 <button className={"btn btn-danger"} onClick = {(e) => this.props.handleDelete(index)}>Delete</button>
        //             </td>
        //         </tr>
        // })
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                  key={number}
                  id={number}
                  className="page-item"
                >
                {number}
                </li>
              );
            });
        return(
                <div>
                    <table className="tabel">
                    <thead>
                      <tr><th width="30%">Id</th><th width="30%">Title</th><th width="30%">Body</th></tr>
                    </thead>
                    <tbody>
                    {renderTodos}
                    </tbody>
                  </table>
                  <ul className="pagination">
                    {renderPageNumbers}
                  </ul>
              
                </div>
                
              );
        
            
            // <div>
            //     <table className="table">
            //         <tr>
            //             <th>Name</th>
            //             <th>Title</th>
            //             <th>Action</th>
            //         </tr>
            //         <tbody>
            //             {detail}
            //         </tbody>
                   
            //     </table>
            //     <center><button type="button" className="btn btn-primary" onClick={(e) => this.props.handleAdd(e)}>Add contact</button></center>
   
           // </div>
        
    }
}

export default Dashboard;