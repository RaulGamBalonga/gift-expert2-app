import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {

    const [categories, setCategories] = useState([' One punch']);

    const onAddCategory = ( NewCategory ) => {

        if(categories.includes( NewCategory) ) return; 

        setCategories([NewCategory, ...categories]);
        }

  return (
    <>
        {/* Título */}
      <h1> GifExpertApp </h1>

        
        <AddCategory 
            onNewCategory = { (value ) => onAddCategory(value) }
        />
        
  
            { 
            categories.map( (category ) => (
                <GifGrid
                    key={ category }
                    category={ category 
                    }
                />
            ))
            }
    
        

    </>
  );
}
