// import React, {useState, useEffect} from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import {getGifs} from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([])

    // podemos renombrar en la desestructuracion : data:images
    const {data:images, loading} = useFetchGifs(category);
    // console.log(loading)
    
    // solo se ejecuta getGifs cuando el componente es renderizado
    // por primera vez
    // useEffect(() => {
    //     getGifs( category )
    //         .then(img => setImages(img) )
    // }, [category]) // si la cateogria cambia vuelve a ejecutar el use effetc

    return (
        <>
            <h3>{category}</h3>

            {/* si el primero es true evalua el segundo atributo */}
            { loading && <p  className="card animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                
                {
                    // sin llaves es return implicito
                    // con parentesis retorna una objeto
                    images.map(imagenes => (
                        <GifGridItem
                            key = {imagenes.id}
                            // imagenes = {imagenes}
                            {...imagenes} // para mandar las propiedades de las imagenes como una propiedad independiente  
                        />
                    ))
                }
                
            </div>
        
        </>
    )
}
