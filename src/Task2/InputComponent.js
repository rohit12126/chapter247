import React,{Component} from 'react';

class InputComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    handleChange = (event) => {
        this.props.handleInput(event.target.value);
    }
    render(){
        return(
            <div>
                <input name="name" value="" onChange={this.handleChange} />
            </div>
        )
    }

}
export default InputComponent;