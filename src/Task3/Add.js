import React,{Component} from 'react'
import {FormGroup,FormControl,Modal,Button,Panel} from 'react-bootstrap';
import List from './List'
class Add extends Component{
    constructor(props){
        super(props)
        this.state ={
            name:"",
            position:"",
            contactNumber:"",
            emailId:"",
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
            position:this.state.position,
            contactNumber:this.state.contactNumber,
            emailId:this.state.emailId
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
                        <Panel.Title componentClass="h3">Employee Form</Panel.Title>
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
                               Position: <FormControl
                                    type="text"
                                    name="position"
                                    value={this.state.position}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                               Contact Number :<FormControl
                                    type="text"
                                    name="contactNumber"
                                    value={this.state.contactNumber}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                               EmailId: <FormControl
                                    type="text"
                                    name="emailId"
                                    value={this.state.emailId}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <Button onClick={this.handelSubmit}>Submit</Button>
                        </form>
                    </Panel.Body>
                </Panel>
                <button onClick={this.handelClick}>Back</button>
                {this.state.back ?<List />:""}
            </div>
                </div>
            

                        
            </div>
        )
    }
}
export default Add;