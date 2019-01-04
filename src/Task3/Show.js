import React from 'react';
import {FormGroup,FormControl,Button,Panel} from 'react-bootstrap';
import List from './List'
class Add extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name:"",
            qualification:"",
            data:[],
            status:false,
            back:false
            
        }
    }
    handleChange = (event) =>{
      
        this.setState({[event.target.name]:event.target.value})
       
     
    }
    handelSubmit = (event) =>{
        event.preventDefault();
        this.setState({status:true})
        var data={
            name:this.state.name,
            qualification:this.state.qualification
        }
        this.props.handlerFromParant(data);
    
    }
    handelClick = () =>{
        this.setState({back:true})
    }
    render(){   
        return(
            <div>
                <div className="static-modal">  
                <div className="col-md-4 offset-md-4">
                 <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Employee</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <form>
                            <FormGroup>
                                Name:<FormControl
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                            Qualification: <FormControl
                                    type="text"
                                    name="qualification"
                                    value={this.state.qualification}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <Button onClick={this.handelSubmit}>Submit</Button>
                        </form>
                    </Panel.Body>
                </Panel>
                <button onClick={this.handelClick}>Show</button>
                {this.state.back ?<List />:""}
            </div>
                </div>

                        
            </div>
        )
    }
}
export default Add;