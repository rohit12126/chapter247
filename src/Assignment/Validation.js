import React,{Component} from 'react'
const Validation = (props) => {
    
    if(props.value<5){
       return <p style={{color:'red'}}>Text Too short</p>
        
    }
    else{
       return <p style={{color:"green"}} >Text is long enough</p>
        
    }
}
export default Validation