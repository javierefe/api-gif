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
            {/* <input 
                type="text"
                value={ intputValue }
                placeholder="Busca tu gif..."
                onChange={handleInputChange}
            /> */}
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text btn btn-success">Buscador</span>
                </div>
                <input type="text" value={ intputValue } onChange={handleInputChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
            </div>
            

        </form>
       
        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}