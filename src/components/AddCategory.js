import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({categorias, setCategories}) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e)=>{
    setInputValue(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(inputValue.trim().length>2){
      setCategories([ inputValue,...categorias]);  
    }
    setInputValue('');
  }

  return (
      <form
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
      </form> 
  )
}
AddCategory.protoTypes={
  setCategories:PropTypes.func.isRequired
}

export default AddCategory