import React from 'react';

const ValidationComponent = (props) => {
    let text = "Text Is Long Enough";
    let textStyle = {
        color:"green" 
    }
    if( props.nameLength < 5 ){
        text = "Text Is Too Short";
        textStyle = {
            color:"red" 
        }
    }
    return <p style={textStyle}>{text}</p>
}
export default ValidationComponent;