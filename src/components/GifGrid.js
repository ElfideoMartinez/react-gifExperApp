import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categorie}) => {

    const {data:images,loading}=useFetchGifs({categorie});
    
    
  return (
    <>
        <h3 className="animate__animated animate__fadeIn">{categorie}</h3>
        {loading && <p className="animate__animated animate__flash">Loading...</p>}
        <div className="card-grid">
                {images.map(img=>(
                    <GifGridItem className="card" key={img.id}
                        {...img}
                    />
                ))}
        </div>
    </>
  )
}
