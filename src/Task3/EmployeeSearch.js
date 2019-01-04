import React,{Component} from 'react'
class EmployeeSearch extends Component{
    constructor(props){
        super(props)
        this.state={
            item:[]
        }
    }
    componentDidMount(){
        var temp=this.state.item
        this.props.data.map(item =>{
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

    render(){
        return(
            <form>
                    <fieldset className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
                    </fieldset>
                </form>
        )
    }
}
export default EmployeeSearch;