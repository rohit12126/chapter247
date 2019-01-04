import React,{Component} from 'react'
import Employeeinfo from './Employeeinfo'
import EmployeeSearch from './EmployeeSearch'
import Add from './Show';
class List extends Component{
    constructor(props){
        super(props)
        this.state={
            employeeDetail:"",
            show:true,
            add:false,
            item:"",
            
            data:[{
                name:"Manish",
                Qualification:"B.E."
            },
            {
                name:"Shubham",
                Qualification:"B.Sc."
            },
            {
                name:"Arpit",
                Qualification:"B.E."
            },
            {
                name:"Ajay",
                Qualification:"B.E."
            },
            {
                name:"Ashish",
                Qualification:"B.Sc."
            },
            {
                name:"Vikas",
                Qualification:"B.E."
            },
            {
                name:"Sumit",
                Qualification:"B.Sc."
            },
            {
                name:"Anurag",
                Qualification:"B.E."
            },
            {
                name:"Abhay",
                Qualification:"B.E."
            },
            {
                name:"Ankur",
                Qualification:"B.Sc."
            }
        ],
        item:[],
        detail:false
        }
    }
    componentDidMount(){
        var temp=this.state.item
        this.state.data.map(item =>{
            temp.push(item.name);
            this.setState({item:temp})
        })
    }
    filterList = (event)=>{
        
        var updatedList = this.state.item
        updatedList = updatedList.filter(function(item){
            return item.toLowerCase().search(
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
        })
        
    }
    handleData =(detail)=> {
        const data=[...this.state.data]
        data.push(detail);
        this.setState({data})
        this.setState({show:true})
        this.setState({add:false})
       }

    render(){
        return(
            <div> 
                
                <form>
                    <fieldset className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
                    </fieldset>
                </form>
                  {this.state.add ?<Add />:""}
                  <button onClick={this.handelClick}>Show</button>
                { 
                   this.state.show ?
                   this.state.data.map((value,index) =>{
                    return <ul>
                    <li key={index}onClick={(e)=>this.handelShow(value)} >{value.name} <button style={{color:'red'} } onClick={(e)=>this.handelDelete(index)}>Delete</button></li>
                    
                    </ul>
                })
                        
                :""}
                 
                    
               {this.state.detail ?<Employeeinfo detail={this.state.employeeDetail}/>:""}
            </div>
        )
    }
}
export default List;