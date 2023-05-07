import React, { useState } from 'react'
import './form.css'

const Form = ({ onSaveData }) => {
    const [form, setform] = useState({ product_id: '', selling_Price: '', product_Name: '' })
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(form)
        onSaveData(form);
        setform({ product_id: '', selling_Price: '', product_Name: '' });
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Product ID : </label>
                <input type="number" value={form.product_id} onChange={(e) => setform({ ...form, product_id: e.target.value })} />
            </div>
            <div>
                <label>Selling Price : </label>
                <input type="number" value={form.selling_Price} onChange={(e) => setform({ ...form, selling_Price: e.target.value })} />
            </div>
            <div>
                <label>Product Name : </label>
                <input type="text" value={form.product_Name} onChange={(e) => setform({ ...form, product_Name: e.target.value })} />
            </div>
            <button type='submit'>Add Product</button>
        </form>
    )
}

export default Form
