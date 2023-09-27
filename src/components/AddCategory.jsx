import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, SetInputValue] = useState('')

    const onInputChange = ({target}) => {
        SetInputValue(target.value)
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1 ) return 

        onNewCategory( inputValue.trim() );
        SetInputValue('')
    }
 
  return (
    <form onSubmit={ onSubmit}>
        <input
            type='text'
            placeholder='Buscar Gifs' 
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
