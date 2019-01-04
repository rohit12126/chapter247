import React,{Component} from 'react';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:""
        }
    }
    handelChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    render(){
        return(
            <div>
                <input type="text" name="name" value = {this.state.name} onChange = {this.handelChange} />
                {this.state.name.length > 0 ?
                    <div>
                        <ValidationComponent 
                            nameLength = {this.state.name.length} 
                        />
                        <CharComponent 
                            name = {this.state.name}
                        />
                    </div>
                : null
                }
            </div>
        )
    }
}
export default App;