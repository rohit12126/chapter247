import React,{Component} from 'react';
import Dashboard from './../../Component/Dashboard';
import EmployeeDetail from './../../Component/EmployeeDetail';
import AddEmployee from './../../Component/AddEmployee';

class EmployeeList extends Component{
    constructor(props   ){
        super(props);
        this.state = {
            employee : [
                {
                    name: 'Aayushi',
                    designation: 'Developer',
                    age: 15
                },{
                    name: 'Ramesh',
                    designation: 'Developer',
                    age: 15
                },{
                    name: 'Ram',
                    designation: 'Developer',
                    age: 15
                },{
                    name: 'Shyam',
                    designation: 'Developer',
                    age: 15
                },{
                    name: 'Alex',
                    designation: 'Developer',
                    age: 15
                },{
                    name: 'Steve',
                    designation: 'Developer',
                    age: 15
                },{
                    name: 'Geeta',
                    designation: 'Developer',
                    age: 15
                },{
                    name: 'Ankita',
                    designation: 'Developer',
                    age: 15
                },{
                    name: 'John',
                    designation: 'Developer',
                    age: 15
                },{
                    name: 'Bob',
                    designation: 'Developer',
                    age: 15
                },{
                    name: 'Mischel',
                    designation: 'Developer',
                    age: 15
                },
            ],
            name: '',
            designation: '',
            age: '',
            showDetails:false,
            employeeData:'',
            showList:true,
            addContactForm:false,
            search:''
        }
    }
    handleDelete = (index) => {
        let employeeList = [...this.state.employee];
        employeeList.splice(index, 1);
        this.setState({ employee: employeeList });
    }
    handleClick(element){
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
    handleInputs = (e) => {
        this.setState({
             [e.target.name]: e.target.value,
        });
    }
    handleSearch = (e) => {
        let result = [...this.state.employee];
        result = result.filter(function (item) {
          return (item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1);
        });
        this.setState({
          [e.target.name]: e.target.value,
          employee: result
        });
    }
    handelSubmit = (e) => {
        e.preventDefault();
        console.log('handleAdd')
        const {name, designation, age } = this.state
        let newList = [...this.state.contactList];
        newList.push({
            name,
            designation,
            age
        });
        this.setState({ 
            employee: newList, 
            addContactForm: false, 
            showList:true,
            name: '', 
            designation: '',
            age: '',
            search: '',
        });
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="Search" name="search" className="form-control" style={{width: '250px', margin: '0 auto', marginBottom: '20px'}} aria-describedby="search" value={this.state.search} onChange={this.handleSearch} />
                {
                    this.state.showList ? 
                        <Dashboard 
                            employee={this.state.employee} 
                            handleClick={this.handleClick.bind(this)} 
                            handleDelete={this.handleDelete.bind(this)} 
                            handleAdd={this.handleAdd}
                        /> 
                    : ('')
                }
                {
                    this.state.showDetails ? 
                        <EmployeeDetail employee={this.state.employeeData} handleBack={this.handleBack}/>
                    : ''
                }
                {
                    this.state.addContactForm ? 
                        <AddEmployee 
                            handleInputs = {this.handleInputs}
                            handelSubmit = {this.handelSubmit}
                        />
                    : ''
                }
            </div>
        )
    }
}

export default EmployeeList;