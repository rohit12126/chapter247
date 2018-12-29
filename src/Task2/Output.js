import React,{Component} from 'react'
class Input extends Component{
    constructor(props){
        super(props)
       
    }
    render(){
        return(
                  <p>{this.props.name}</p>
            )
    }
}
export default Input;