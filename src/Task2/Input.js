import React,{Component} from 'react'
class Input extends Component{
    constructor(props){
        super(props)
        this.state={
            name:""
        }
    }
    handleChange = (event) => {
        this.props.change(event.target.value);
    }
    render(){
        return(
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        )
    }
}
export default Input;