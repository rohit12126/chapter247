import React from 'react';
import CharComponentCss from './CharComponent.module.css'

const CharComponent = (props) => {
    return <p className={CharComponentCss.text}>{props.name}</p>
}

export default CharComponent
