import React from 'react';

const Productlist =(props)=>{ 
    const image=props.product.photo_thumbnail.split(',');
    return(
        <div className="col-lg-3 col-md-4 col-xs-6" >
            <a href="#" className="d-block mb-4 h-100" onClick={props.handleClick}>
                <img className="img-fluid img-thumbnail" src={`http://flowhaus.com/flowhaus/${image[0]}`} alt={props.product.name} />
                <h4>{props.product.name}{" "}({image.length})</h4>
            </a>
        </div> 
     )};
export default Productlist;