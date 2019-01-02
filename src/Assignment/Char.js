import React,{Component} from 'react'
import CharComponentCss from './CharComponent.module.css'
const Char = (props) => {
    return props.name.map((element, index) => {
    return <p className={CharComponentCss.text} key = {index} onClick = {(e) => props.handelDelete(index)}>{props.name}</p>
    })
}
export default Char
