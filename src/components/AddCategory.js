import React, {useState} from 'react'
import PropTypes from 'prop-types'


// POR LO GENERAL SE ENVIA PROPS
// PERO SE HACE LA DESESTRUCTURACION {}
export const AddCategory = ({setCategories}) => {

    const [intputValue, setintputValue] = useState(''); // si no ponemos '' se marcara warning como undefines

    const handleInputChange = (e) => {
        setintputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        // evita los refrescos de la pagina
        e.preventDefault();

        // es una validacion para vacios y ademas borra el inputValue
        if(intputValue.trim().length > 2){
            setCategories(cats => [intputValue, ...cats]);
            setintputValue('');
        }
    }

    // AÑADIR CON BOTON
    // const handleAdd = (e) => {
    //     // setCategories([...categories, 'HunterXHunter']);
    //     // AL INCICIO
    //     // setCategories(['HunterXHunter',...categories ]);
    //     // otra forma
    //     e.preventDefault();
    //     if(intputValue.trim().length > 2){
    //         setCategories(cats => [...cats, intputValue]);
    //         setintputValue('');
    //     }

    //     // setcategories(categories.concat('Sony'));
    // }
    return (
        
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={ intputValue }
                onChange={handleInputChange}
            />
            {/* <button onClick={handleAdd}>Agregar</button> */}

        </form>
       
        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}