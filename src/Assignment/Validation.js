import React from 'react';

const Validation = (props) => {
    let msg = "Text is long enough";
    let msgStyle = {
        color:"green" 
    }
    if( props.nameLength < 5 ){
        msg = "Text too short";
        msgStyle = {
            color:"red" 
        }
    }
    return <p style={msgStyle}>{msg}</p>
}
export default Validation