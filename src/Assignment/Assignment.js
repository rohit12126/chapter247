import React,{Component} from 'react';
import Validation from './Validation';
import CharComponent from './CharComponent';

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
    handelDelete = () => {

    }
    render(){
        return(
            <div>
                <input 
                    type="text" 
                    name="name" 
                    value = {this.state.name} 
                    onChange = {this.handelChange} 
                />
                {this.state.name.length > 0 ?
                    <div>
                        <Validation 
                            nameLength = {this.state.name.length} 
                        />
                        <CharComponent 
                            name = {this.state.name} 
                            handelDelete = {this.handelDelete} 
                        />
                    </div>
                    : null
                }
            </div>
        )
    }
}
export default Assignment;