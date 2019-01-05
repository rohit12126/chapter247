import React,{Component} from 'react'
import {FormGroup,FormControl,Button,Panel} from 'react-bootstrap';
class AddEmployee extends Component{
    render(){
        return(
            <div className="static-modal">  
                <div className="col-md-4">
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
                                        value={this.props.name}
                                        onChange={this.props.handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                Position: <FormControl
                                        type="text"
                                        name="Position"
                                        value={this.props.position}
                                        onChange={this.props.handleChange}
 
                                    />
                                </FormGroup>
                                <FormGroup>
                                Contact Number :
                                    <FormControl
                                        type="text"
                                        name="contactNumber"
                                        value={this.props.contactNumber}
                                        onChange={this.props.handleChange}
                                     />
                                </FormGroup>
                                <FormGroup>
                                EmailId: <FormControl
                                        type="text"
                                        name="emailId"
                                        value={this.props.emailId}
                                        onChange={this.props.handleChange}
                                     />
                                </FormGroup>
                                <Button onClick={this.props.handelSubmit}>Submit</Button>
                            </form>
                        </Panel.Body>
                     </Panel>
                </div>
            </div>
                
        )
    }
}
export default AddEmployee;