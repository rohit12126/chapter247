import React,{Component} from 'react';
import Dashboard from './../../Component/Dashboard';
import EmployeeDetail from './../../Component/EmployeeDetail';
import AddEmployee from '../../Component/AddEmployee';

class EmployeeList extends Component{
    constructor(props   ){
        super(props);
        this.state = {
            data:[{
                name:"Archana",
                Position:"Fresher",
                contactNumber:"1234567890",
                emailId:"archana@gmail.com"
            },
            {
                name:"Aayushi",
                Position:"Junior Developer",
                contactNumber:"1234567890",
                emailId:"aayushi@gmail.com"
            },
            {
                name:"Rohit",
                Position:"Designer",
                contactNumber:"1234567890",
                emailId:"rohit@gmail.com"
            },
            {
                name:"Rohit",
                Position:"Senior Developer",
                contactNumber:"1234567890",
                emailId:"rohit@gmail.com"
            },
            {
                name:"Manish",
                Position:"Fresher",
                contactNumber:"1234567890",
                emailId:"Manish@gmail.com"
            },
            {
                name:"Tushar",
                Position:"Senior Developer",
                contactNumber:"1234567890",
                emailId:"tushar@gmail.com"
            },
            {
                name:"Yash",
                Position:"Senior Developer",
                contactNumber:"1234567890",
                emailId:"yash@gmail.com"
            },
            {
                name:"Arpit",
                Position:"Senior Developer",
                contactNumber:"1234567890",
                emailId:"arpit@gmail.com"
            },
            {
                name:"Arpita",
                Position:"Designer",
                contactNumber:"1234567890",
                emailId:"arpita@gmail.com"
            },
            {
                name:"Marry",
                Position:"Tester",
                contactNumber:"1234567890",
                emailId:"marry@gmail.com"
            }
        ],
            name:"",
            Position:"",
            contactNumber:"",
            emailId:"",
            status:false,
            back:false,
            show:true,
            showDetails:false,
            employeeData:'',
            showList:true,
            addContactForm:false,
            search:''
        }
    }
    handleDelete = (index) => {
        let employeeList = [...this.state.data];
        employeeList.splice(index, 1);
        this.setState({ data: employeeList });
    }
    handleShow(element){
        this.setState({
            showDetails:true,
            employeeData:element,
            showList:false
        })
    }
    handleBack = () => {
        this.setState({
            showDetails:false,
            employeeData:'',
            showList:true,
            addContactForm:false
        })
    }
    handleAdd = () => {
        this.setState({
          addContactForm: true,
          showDetails:false,
          showList:false
        });
    }
    handleChange = (e) => {
        console.log('e.target.value');
        console.log(e.target.value);
        console.log('e.target.value');
        this.setState({
             [e.target.name]: e.target.value,
        });
    }
    handleSearch = (event) => {
        this.setState({search:event.target.value})
        var updatedList = [...this.state.data]
        console.log(updatedList)
        updatedList = updatedList.filter(function(item){
            return item.name.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        this.setState({data: updatedList});
    }
    
    handelSubmit = (e) => {
        console.log("form submitted")
        e.preventDefault();
        const {name, Position,contactNumber,emailId } = this.state
        console.log(name);
        let newList = [...this.state.data];
        newList.push({
            name, Position,contactNumber,emailId
        });
        this.setState({ 
            data: newList, 
            addContactForm: false, 
            showList:true,
            name: '', 
            Position:"",
            contactNumber:"",
            emailId,
        });
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="Search" name="search" className="form-control" style={{width: '250px', marginBottom: '20px'}} aria-describedby="search" value={this.state.search} onChange={this.handleSearch} />
                {
                    this.state.showList ? 
                        <Dashboard 
                            data={this.state.data} 
                            handelShow={this.handleShow.bind(this)} 
                            handleDelete={this.handleDelete.bind(this)} 
                            handleAdd={this.handleAdd}
                        /> 
                    : ('')
                }
                {
                    this.state.showDetails ? 
                        <EmployeeDetail data={this.state.employeeData} handleBack={this.handleBack}/>
                    : ''
                }
                {
                    this.state.addContactForm ? 
                        <AddEmployee 
                            handleChange = {this.handleChange}
                            handelSubmit = {this.handelSubmit}
                        />
                    : ''
                }
            </div>
        )
    }
}

export default EmployeeList;