import React,{Component} from 'react';
import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';

class Main extends Component{
    constructor(props){
        super(props)
        this.state={
           name:'' 
        }
    }
    handleInput = (props) => {
        this.setState({
            name: props
        })
    }
    render(){
        return(
            <div>
                <InputComponent handleInput={this.handleInput}/>
                <OutputComponent name={this.state.name}/>
            </div>
        )
    }

}
export default Main;



