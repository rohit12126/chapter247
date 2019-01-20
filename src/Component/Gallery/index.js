import React from 'react';

const Gallery = (props) => {
    const image=props.product.photo_thumbnail.split(',');
    return(
        <div className={'row'}>
            <div className={'col-lg-4'}>
                <img 
                    className="img-fluid img-thumbnail" 
                    src={`http://flowhaus.com/flowhaus/${image[0]}`} 
                    alt={props.product.name} 
                />
            </div>
            <div className={'col-lg-8'}>
                {image.map(image => (
                    <img 
                        className="img-fluid img-thumbnail" 
                        src={`http://flowhaus.com/flowhaus/${image}`} 
                        alt={props.product.name} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Gallery;