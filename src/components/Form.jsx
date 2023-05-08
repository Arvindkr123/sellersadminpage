import React, { useState } from 'react'

const Form = ({ onSaveData }) => {
    const [singleProduct, setSingleProduct] = useState({
        product_id: '',
        product_Price: '',
        product_Name: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSingleProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(singleProduct)
        onSaveData(singleProduct);
        setSingleProduct({
            product_id: '',
            product_Price: '',
            product_Name: '',
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Product ID : </label>
            <input
                type="text"
                name="product_id"
                value={singleProduct.product_id}
                onChange={handleInputChange}
            />
            <label>Product Price : </label>
            <input
                type="number"
                name="product_Price"
                value={singleProduct.product_Price}
                onChange={handleInputChange}
            />
            <label>Product Name : </label>
            <input
                type="text"
                name="product_Name"
                value={singleProduct.product_Name}
                onChange={handleInputChange}
            />
            <button type="submit">Add Product</button>
        </form>
    );
};


export default Form;