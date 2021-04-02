import React from 'react'
import {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
import styled, { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles} from './themes.js';
// import { Toggle } from './components/Toggle'
// import PropTypes from 'prop-types'

const StyleApp = styled.div`

    color : ${(props) => props.theme.fontColor};

`;

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['Breaking Bad'])
    const [theme, setTheme] = useState('light')

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light") 
    }
    
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
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <StyleApp>
                <div className="row">
                    <div className="col-11">
                        <h2>ApiGif</h2>
                    </div>
                    <div className="col-1">
                       {/* <input onClick={() => themeToggler()} type="checkbox" checked data-toggle="toggle" data-onstyle="dark"/> */}
                       <button className="btn btn-primary" onClick={() => themeToggler()}>Color Tema</button>
                       
                    </div>
                </div>

                {/* <h2>ApiGift</h2> */}
                {/* <button onClick={() => themeToggler()}>Cambia de tema</button> */}
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
            </StyleApp>
        </ThemeProvider>
    )
}






