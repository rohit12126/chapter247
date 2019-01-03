import React ,{Component} from 'react'
class Employeelist extends Component{
    constructor(props){
        super(props)

    }
    handelDelete =(index)=>{

        const data=this.props.data;
        data.splice(index,1)
        this.setState({data})
        
    }
    handelShow= (value) =>    {
        this.setState({detail:true,
            employeeDetail:value,
            show:false
            
        })
           }
    render(){
        return(
            <div>
                {this.props.data.map((value,index) =>{
                        return <ul>
                        <li key={index}onClick={(e)=>this.handelShow(value)} >{value.name} <button style={{color:'red'} } onClick={(e)=>this.handelDelete(index)}>Delete</button></li>
                        
                        </ul>
                    })}
            </div>
        )
    }
}