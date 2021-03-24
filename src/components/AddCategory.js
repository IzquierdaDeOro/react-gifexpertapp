import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState({
       
        category: ''
        
    });

    const handleInputChange = (e) => {

        setInputValue({
            ...inputValue,
                [e.target.name]: [e.target.value]
        })

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        setInputValue({
            category: ''
        })
        setCategories( cats => [ inputValue.category, ...cats ]);

    }

    return (
        <form onSubmit = { handleSubmit }>

            <input 
                name = "category" type = "text" 
                value = { inputValue.category } 
                onChange = { handleInputChange } 
            />

        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
export default AddCategory
