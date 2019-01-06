import React, {Component, PropTypes} from 'react';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';
 
 
export default class PdfDemo extends Component {
  constructor(props) {
    super(props);
  }
 
  printDocument() {
    const input = document.getElementById('divToPrint');
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
 
  render() {
    return (<div>
      <div className="mb5">
        <button onClick={this.printDocument}>Print</button>
      </div>
      <div id="divToPrint" className="mt4">
        <table>
            <tr>
                <th>Name</th>
                <th>Action</th>
            </tr>
            <tbody>
                <tr>
                   <td>Aayushi</td>
                   <td>Delete</td>
                </tr>
                <tr>
                   <td>Aayushi</td>
                   <td>Delete</td>
                </tr>
                <tr>
                   <td>Aayushi</td>
                   <td>Delete</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>);
  }
}