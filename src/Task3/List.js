import React,{Component} from 'react'

import Add from './Add'
class List extends Component{
    constructor(props){
        super(props)
        this.state={
            show:true,
            add:false,
            item:"",
            
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
        ]
        }
    }
    handelClick (){
        this.setState({
              show:false,
            add:true})
        
    }
    handleData =(detail)=> {
        const data=[...this.state.data]
        data.push(detail);
        console.log(data);
        console.log('data');
        this.setState({data})
       }
    filterList = (event)=>{
    var updatedList = this.state.data;
    console.log(updatedList.name)
    updatedList = updatedList.filter(function(item){
        return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({item: updatedList});
    }
    handelDelete =(index)=>{
        
             const data=this.state.data;
             data.splice(index,1)
             this.setState({data})
        
    }
    
    render(){
        console.log(this.state.data)
        return(
            <div> 
                
                <form>
                    <fieldset className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
                    </fieldset>
                </form>
                {this.state.add ?<Add handlerFromParant={this.handleData}/>:""}
                 <button style={{color:'green'} } onClick={this.handelClick.bind(this)}>Add</button>
                 
                { 
                   this.state.show ?
                    this.state.data.map((value,index) =>{
                      return   <ul>
                        <li key={index}>{value.name} <button style={{color:'red'} } onClick={(e)=>this.handelDelete(index)}>Delete</button></li>
                         
                      </ul>
                    })
                    :""
                        
                } 
               
            </div>
        )
    }
}
export default List;