import { useState } from "react"
import { AddCategory, GifGrid } from './components/index';
// import { GifGrid } from './components/GifGrid';

 export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {

        if( categories.find( (category) => category === newCategory ) ) return;

        setCategories([ newCategory, ...categories ]);

        //Segunda Forma
        //setCategories( cat => [ ...cat, 'Naruto'])
    }

     return (
        <>
            {/* titulo */}
            <h1> GifExpertApp </h1>
        
            {/* Inputs */}
            <AddCategory onNewCategory={ onAddCategory } />

            { /* Listado de Gif */ }
            {
                categories.map( (category) => (
                    <GifGrid
                        key={ category } 
                        category={ category } 
                    />
                ))
            }


                {/* Gif Item */}
        </>
     )
 }