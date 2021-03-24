import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {data:images, cargando} = useFetchGifs(category);
    
    return (
        <>
            <h3 className="animate__animated animate__fadein">{category}</h3>
            {cargando && <p className="animate__animated animate__flash">Cargando...</p>}

            {<div className="card-grid">
                    {
                        images.map( img => (
                            <GifGridItem {...img} key={img.id}/>
                        ))
                    }
            </div> 
            }
        </>
    )
}

export default GifGrid
