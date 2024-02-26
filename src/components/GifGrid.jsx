import { useState, useEffect } from "react";

import { GifItem } from "./GifItem";
import { useFetchGifts } from "../hooks/useFetchGifts";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifts( category );

  // const [images, setImages] = useState([]);


  // const getImages = async () => {
  //   const newImages = await getGifs( category );
  //   setImages( newImages )
  // }

  // Le inidca a React que el componente solo se renderice una vez ( al inicio  )
  //  Permite o funciona para disparar efectos segundarios
  // useEffect( () =>{
  //   getImages();
  // }, []);
  
  return (
    <>
        <h3>{ category }</h3>
        { 
          isLoading && <h2>Cargando...</h2> 
        }
        
        <div className="card-grid">
          {
              images.map( ( image ) => (
               <GifItem 
                  key={image.id} 
                  { ...image } // con esta sintaxis se envian todos los valores por separado del image
               />
              ))
          }
        </div>
    </>
  )
}

 