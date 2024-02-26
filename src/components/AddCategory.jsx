import { useState } from "react";


export const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = (event) => {
        setInputValue( event.target.value )
    }

    const onSubtmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return; 

        // pasando un metodo
        onNewCategory( inputValue);

        //Pasando el setValue para que lo limpie 
        //setCategories( categoriesList => [ inputValue, ...categoriesList] );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubtmit }>
            <input 
                type='text'
                placeholder="Buscar gifs"
                value={ inputValue } 
                name='search'
                onChange={ onInputChange }
            />
        </form>
    );

}