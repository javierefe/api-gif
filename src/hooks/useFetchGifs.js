import {useState} from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // los efectos no pueden ser async
  
    getGifs(category)
    .then(img => {
        
            
                
            setState({
                data : img,
                loading : false
            });

            
    })
   // solo se evalua este efecto cuando la categoria cambia

    return state;
}
