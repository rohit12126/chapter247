import React,{Component} from 'react';
import Dashboard from './../../Component/Dashboard';
import EmployeeDetail from './../../Component/EmployeeDetail';
import AddEmployee from '../../Component/AddEmployee';
import axios from 'axios';
class EmployeeList extends Component{
    constructor(props   ){
        super(props);
        this.state = {
        persons:[],
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
    componentDidMount (){
        console.log("bdjh");
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
    }
    
    handleDelete = (id) => {
        console.log("Hello")
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {console.log("**********" ,res)
           
            
           })
         .catch(function(error) {
            console.log(error);
            });
    }
    handleShow(element){
        this.setState({
            showDetails:true,
            persons:element,
            showList:false
        })
    }
    handleBack = () => {
        console.log("back")
        this.setState({
            showDetails:false,
            
            showList:true,
            addContactForm:false
        })
    }
    componentDidUpdate(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const persons = res.data;
            this.setState({ persons });
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
        var updatedList = this.state.persons["name"]
        console.log(updatedList)
        updatedList = updatedList.filter(function(item){
            return item.name.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        this.setState({data: updatedList});
    }
    
    handelSubmit = (e) => {
        console.log("hello")
        axios.post('https://jsonplaceholder.typicode.com/users',{
           data:{
            name:'Archana',
            username:'archana039',
            email:"archana@gmail.com",
            address:{}, 
            phone:"1234567890",
            websitetype:"",
            company:{}
         } })
        .then(res => { console.log("@@@@@@@@@@@@@@@",res)
            return res;
          })
        

        
    }
    render(){
        
        return(
            <div>
                <h2 className="text-center">Employee Information</h2>
                <input type="text" placeholder="Search" name="search" className="form-control" style={{width: '250px', marginBottom: '20px'}} aria-describedby="search" value={this.state.search} onChange={this.handleSearch} />
                {
                    this.state.showList ? 
                        <Dashboard 
                            data={this.state.persons} 
                            handelShow={this.handleShow.bind(this)} 
                            handleDelete={this.handleDelete.bind(this)} 
                            handleAdd={this.handleAdd}
                        /> 
                    : ('')
                }
                {
                    this.state.showDetails ? 
                        <EmployeeDetail data={this.state.persons} handleBack={this.handleBack}/>
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
