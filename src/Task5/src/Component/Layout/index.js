import React from 'react';

const Layout = (props) => {
    return( 
        <>
            <div>Tool Bar</div>
            {props.children}
        </>
    )
}

export default Layout;