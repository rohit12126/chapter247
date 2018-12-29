import React,{Component} from 'react'
import Input from './Input';
import Output from './Output';
class Task extends Component{
     constructor(props){
         super(props)
             this.state={
                name:''
             }
             
         
     }
     handelChange =(props)=>{
         this.setState({
            name:props
         })
        alert(props+"hello");
     }
     render(){
         return(
            <div>
                <Input change={this.handelChange} />
                <Output name={this.state.name} />
            </div>
         )
     }
    
}
export default Task;