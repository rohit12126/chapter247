import React,{Component} from 'react';
import Validation from './Validation';
import Char from './Char';
class Assignment extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:""
        }
    }
    handelChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    handelDelete =() => {
        console.log("delete")
        this.setState({name:""})
    }
    render(){
        return(
            <div>
                <input type="text" name="name" value={this.state.name} onChange={this.handelChange} />
                <Validation value={this.state.name.length} />
                <Char value={this.state.name}  Delete={this.handelDelete}/>
            </div>
        )
    }
}
export default Assignment;