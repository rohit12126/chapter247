import React,{Component} from 'react'
class List extends Component{
    constructor(props){
        super(props)
        this.state={
            employee:[
                {
                    name:"Archana",
                    age:17,
                    qualification:"B.E."
                },
                {
                    name:"Aayushi",
                    age:17,
                    qualification:"B.E."
                },
                {
                    name:"Arpita",
                    age:17,
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
export default List;