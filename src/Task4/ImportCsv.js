import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import { CsvToHtmlTable } from 'react-csv-to-table';


class App extends Component {

 constructor(props){
  super(props);
  this.state = {
    csvData: ''
  };
}

handleFiles = files => {
    let reader = new FileReader();
    reader.onload = () => {
      // Use reader.result
      this.setState({
        csvData: reader.result
      })
    }
    reader.readAsText(files[0]);
  }
render() {
return (
    <div>
        
         <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
                 <button className='btn'>Upload</button>
          </ReactFileReader>
            <CsvToHtmlTable
                data={this.state.csvData}
                csvDelimiter=","
                tableClassName="table table-striped table-hover"
            />   
   </div>
)
}
}
export default App      