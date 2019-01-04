import React,{Component} from 'react'
import Employeedetail from './Employeedetail'

import Add from './Add'
class List extends Component{
    constructor(props){
        super(props)
        this.state={
            employeeDetail:"",
            show:true,
            add:false,
            
            
            data:[{
                name:"Archana",
                Position:"Fresher",
                contactNumber:"1234567890",
                emailId:"archana@gmail.com"
            },
            {
                name:"Aayushi",
                Position:"Junior Developer",
                contactNumber:"1234567890",
                emailId:"aayushi@gmail.com"
            },
            {
                name:"Rohit",
                Position:"Designer",
                contactNumber:"1234567890",
                emailId:"rohit@gmail.com"
            },
            {
                name:"Rohit",
                Position:"Senior Developer",
                contactNumber:"1234567890",
                emailId:"rohit@gmail.com"
            },
            {
                name:"Manish",
                Position:"Fresher",
                contactNumber:"1234567890",
                emailId:"Manish@gmail.com"
            },
            {
                name:"Tushar",
                Position:"Senior Developer",
                contactNumber:"1234567890",
                emailId:"tushar@gmail.com"
            },
            {
                name:"Yash",
                Position:"Senior Developer",
                contactNumber:"1234567890",
                emailId:"yash@gmail.com"
            },
            {
                name:"Arpit",
                Position:"Senior Developer",
                contactNumber:"1234567890",
                emailId:"arpit@gmail.com"
            },
            {
                name:"Arpita",
                Position:"Designer",
                contactNumber:"1234567890",
                emailId:"arpita@gmail.com"
            },
            {
                name:"Marry",
                Position:"Tester",
                contactNumber:"1234567890",
                emailId:"marry@gmail.com"
            }
        ],
        
        detail:false
        }
    }
    filterList = (event)=>{
        var updatedList = [...this.state.data]
        console.log(updatedList)
        updatedList = updatedList.filter(function(item){
            return item.name.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        this.setState({data: updatedList});
        }
    handelDelete =(index)=>{
        const data=this.state.data;
        data.splice(index,1)
        this.setState({data})     
    }
    handelShow= (value) =>    {
        this.setState({detail:true,
            employeeDetail:value,
            show:false
        })
           }
    handelClick =(value)=>{
        this.setState({
            show:false,
            add:true,
            search:false
        })
    }
    handleData =(detail)=> {
        const data=[...this.state.data]
        data.push(detail);
        console.log(data);
        console.log('data');
        this.setState({data})
        this.setState({show:true})
        this.setState({add:false})
       }
    
    render(){
        console.log(this.state.data)
        return(
            <div> 
                <center>
                    {this.state.show ?
                    <form>
                        <fieldset className="form-group">
                        <input type="text" className="form-control" placeholder="Search" onChange={this.filterList}/>
                        </fieldset>
                    </form>
                    :""}
                </center>
                  {this.state.add ?<Add handlerFromParant={this.handleData} />:""}
                {this.state.show ?  <button onClick={this.handelClick}>Add</button>  :""}           
                   { 
                   this.state.show ?
                   this.state.data.map((value,index) =>{
                    return <ul>
                    <li key={index}onClick={(e)=>this.handelShow(value)} >{value.name} </li><button style={{color:'red'} } onClick={(e)=>this.handelDelete(index)}>Delete</button>
                    
                    </ul>
                })
                        
                :""}
                 
                    
               {this.state.detail ?<Employeedetail detail={this.state.employeeDetail}/>:""}
            </div>
        )
    }
}
export default List;