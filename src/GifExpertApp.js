import React from 'react'
import {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
// import PropTypes from 'prop-types'

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = (e) => {
    //     console.log(e);
    // }
    // const handleAdd = () => {
    //     // setCategories([...categories, 'HunterXHunter']);
    //     // AL INCICIO
    //     // setCategories(['HunterXHunter',...categories ]);
    //     // otra forma
    //     // setCategories(cat => [...cat, 'HunterXHunter']);

    //     // setcategories(categories.concat('Sony'));
    // }

    return (
        <>
            <h2>ApiGif</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {/* <button onClick={(e) => {handleAdd(e)}>Agregar</button> */}
            {/* si es lo mismo parametro se puede hacer esto... */}
            {/* <button onClick={handleAdd}>Agregar</button> */}
            
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key = {category}
                            category = {category} 
                        />
                    ))
                }

            </ol>
            
        </>
    )
}






