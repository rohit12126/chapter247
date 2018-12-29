import React,{Component} from 'react'
import CharComponentCss from './CharComponent.module.css'
const Char = (props) => {
    return <p className={CharComponentCss.text}>{props.name}</p>
}
export default Char
