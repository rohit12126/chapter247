import React ,{Component} from 'react'
import {Route,Switch} from 'react-router-dom';
class Employee extends Component{
    constructor(props){
        super(props)
        this.state={
            persons:[]
        }
    }
    // componentDidMount (){
    //     console.log("bdjh");
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(res => {
    //         const persons = res.data;
    //         this.setState({ persons });
    //       })
    // }
     render(){
        return(
            <Switch>
                <Route path="/">Home</Route>
                <Route path="/test">test</Route>
            </Switch>
        )
    }
}
export default Employee;