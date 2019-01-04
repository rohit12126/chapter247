import React, {Component} from 'react';

class App extends Component{
    render(){
        return(
            <div>
                <Textone />
            </div>
        );
    }
}
class Textone extends Component{
    constructor(){
        super();
        this.state = {
            textone: ''
        }
    } 
    handleChange(e){
        this.setState({textone: e.target.value})
    }
    render(){
        return(
            <div> 
                <input type="text" value={this.state.textone} onChange={this.handleChange.bind(this)}/>
                <Texttwo textshow = {this.state.textone} />
            </div>
        );
    }
}
class Texttwo extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.textshow}</h1>
            </div>
        );
    }
}
export default App;