import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            employee:[
                {
                    name:"Manish",
                    age:26,
                    qualification:"B.E"
                },
                {
                    name:"Shubham",
                    age:23,
                    qualification:"B.Sc."
                },
                {
                    name:"Arpit",
                    age:30,
                    qualification:"B.E."
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Qualification</th>
                    </tr>
                    {this.state.employee.map((element)=>{
                        return<tr>
                            <td>{element.name}</td>
                            <td>{element.age}</td>
                            <td>{element.qualification}</td>
                        </tr>
                    })
                    }
                </table>
            </div>
        )
    }

}
export default App;