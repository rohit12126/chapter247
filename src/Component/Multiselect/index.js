import React, { Component } from 'react';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { DropdownButton, MenuItem } from 'react-bootstrap'; 
import {Modal} from 'react-bootstrap';
//import './Dashboard.css';

class MultiSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: {}
        }
        this.myRef = React.createRef();
    }
    printDocument = () => {
        const input = this.myRef.current
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            })
            ;
    }
    handleCheck = (e, index) => {
        console.log(e.target.checked);
        console.log("e.target.value");
        console.log(index);
        const checked = { ...this.state.checked };
        checked[index] = !this.state.checked[index];
        this.setState({
            checked
        })
    }
    render() {
        console.log(this.state.checked);
        console.log("this.state.checked");
        const data = this.props.employee.map((element, index) => {
            return <tr key={element.id}>
                <td>
                    <input
                        type="checkbox"
                        name="element"
                        checked={this.state.checked[element.id]}
                        onChange={(e) => this.handleCheck(e, element.id)}
                    />
                </td>
                <td onClick={(e) => this.props.handleClick(element)}>{element.name}</td>
                <td onClick={(e) => this.props.handleDelete(index)}>Delete</td>
            </tr>
        })
        return (
            <div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => this.props.handleAdd(e)}
                >
                    Add contact
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.printDocument}>
                    Export Pdf
                </button>
                <table ref={this.myRef} className={"table-bordered responsive table table-striped table-hover"}>
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    name="element"
                                    checked={this.state.checked}
                                    onChange={(e) => this.handleCheck(e)}
                                />
                                <DropdownButton
                                    bsSize="xsmall"
                                    title="All #"
                                    id="Actions"    
                                >
                                    <MenuItem eventKey="1" onClick={() => this.props.handleMultipleDelete(this.state.checked)}>Delete</MenuItem>
                                    <MenuItem eventKey="2">Another action</MenuItem>
                                    <MenuItem eventKey="3" active>
                                        Active Item
                                    </MenuItem> 
                                </DropdownButton>
                            </th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MultiSelect;