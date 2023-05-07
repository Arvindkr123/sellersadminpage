import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [form, setForm] = useState({ Product_id: '', selling_Price: '', Product_name: '', category: '' });
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('products');
        if (data) {
            setProducts(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(form);

        // create a new product object with the form data
        const newProduct = {
            id: form.Product_id,
            name: form.Product_name,
            price: form.selling_Price,
            category: form.category,
        };

        // update the state with the new product
        setProducts((prevProducts) => [...prevProducts, newProduct]);

        // clear the form after submission
        setForm({ Product_id: '', selling_Price: '', Product_name: '', category: 'Electronic' });
    };

    const deleteHandler = (id) => {
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
    };

    const renderProductsByCategory = (category) => {
        const filteredProducts = products.filter((product) => product.category === category);
        return (
            <div>
                <h3>{category} Items</h3>
                <ul>
                    {filteredProducts.map((product) => (
                        <li key={product.id}>
                            {product.id} {product.price} {product.name}
                            <span>
                                <button onClick={() => deleteHandler(product.id)} style={{ backgroundColor: 'red' }}>
                                    DeleteProduct
                                </button>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="App">
            <h2>Sellers Admin Page</h2>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Product ID :</label>
                    <input type="number" value={form.Product_id} onChange={(e) => setForm({ ...form, Product_id: e.target.value })} />
                </div>
                <div>
                    <label>Selling Price :</label>
                    <input type="number" value={form.selling_Price} onChange={(e) => setForm({ ...form, selling_Price: e.target.value })} />
                </div>
                <div>
                    <label>Product Name :</label>
                    <input type="text" value={form.Product_name} onChange={(e) => setForm({ ...form, Product_name: e.target.value })} />
                </div>
                <div>
                    <label>Choose a Category :</label>
                    <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                        <option value={'Electronic'}>Electronic</option>
                        <option value={'Food'}>Food</option>
                        <option value={'SkinCareItem'}>SkinCareItem</option>
                    </select>
                </div>
                <button type="submit">Add Product</button>
            </form>
            <h3>Products</h3>
            <div className="products-container">
                {renderProductsByCategory('Electronic')}
                {renderProductsByCategory('Food')}
                {renderProductsByCategory('SkinCareItem')}
            </div>
        </div>
    );
};

export default App;
