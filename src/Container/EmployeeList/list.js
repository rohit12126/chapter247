import React,{Component} from 'react';
import Dashboard from './../../component/Dashboard';
import MultiSelect from './../../component/Multiselect';
import EmployeeDetail from './../../component/EmployeeDetail';
import AddEmployee from './../../component/AddEmployee';
import axios from './../../component/axios';
import {Modal} from 'react-bootstrap';

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
            users:'',
            userId:'',
            error:'',
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
            userId:element,
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
        console.log("hfshgff");
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
        let newList = [...this.state.employee];
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
    handleMultipleDelete = (checked) => {
        let data = Object.keys(checked)
            .filter(function(k){return checked[k]})
            .map(Number);
        console.log(data);
        data.map((user) => {
            axios.delete(`https://jsonplaceholder.typicode.com/users/${user}`).then(response => {
                console.log(response.data);
        }).catch(error => {
                this.setState({
                    error:error
                })
            })
        })
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            console.log(response.data);
            this.setState({
                users:response.data
            })
        }).catch(error => {
            this.setState({
                error:error
            })
        })
    }
    render(){
        return(
            <div>
                <input 
                    type="text" 
                    placeholder="Search" 
                    name="search" 
                    className="form-control" 
                    style={{
                        width: '250px', 
                        margin: '0 auto', 
                        marginBottom: '20px'
                    }} 
                    aria-describedby="search" 
                    value={this.state.search} 
                    onChange={this.handleSearch} 
                />
                {
                    this.state.showList && this.state.users.length ? 
                        <MultiSelect 
                            employee={this.state.users} 
                            handleClick={this.handleClick.bind(this)} 
                            handleDelete={this.handleDelete.bind(this)} 
                            handleAdd={this.handleAdd}
                            handleMultipleDelete={this.handleMultipleDelete}
                        /> 
                    : ('')
                }
                {
                    this.state.showDetails ? 
                        <EmployeeDetail 
                            employee={this.state.employeeData} 
                            userId={this.state.userId}
                            handleBack={this.handleBack}
                        />
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