import React from 'react'

 const GifGridItem = ({url, title}) => {

    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title} />
            { title ? <p> {title} </p> : <p> Titulo por defecto </p> }
        </div>
    )
}

export default GifGridItem
