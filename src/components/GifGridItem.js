import React from 'react'

// en ls props hago una desestructuracion de objetos
export const GifGridItem = ({id, title, url}) => {

    return (
        <div className="card animate__animated animate__fadeIn">
          <img src={url} alt={title}/>
          <p><strong>{title}</strong></p>
        </div>
    )
}
