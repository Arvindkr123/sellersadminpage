import React, { useEffect, useState } from "react";
import "./App.css";
import Form from './components/Form';
import ProductList from './components/ProductList.jsx';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedData = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const item = localStorage.getItem(key);
            if (item) {
                storedData.push(JSON.parse(item));
            }
        }
        if (storedData.length > 0) {
            setProducts(storedData);
        }
    }, []);

    useEffect(() => {
        localStorage.clear();
        products.forEach((product) => {
            localStorage.setItem(product.product_id, JSON.stringify(product));
        });
    }, [products]);

    const saveData = (data) => {
        setProducts(prevState => {
            const newProducts = [...prevState, data];
            localStorage.setItem(data.product_id, JSON.stringify(data));
            return newProducts;
        });
    };

    const totalPrice = products.reduce(
        (accumulator, product) => accumulator + parseInt(product.product_Price),
        0
    );

    const deleteProduct = (id) => {
        const updatedData = products.filter((c) => c.product_id !== id);
        setProducts(updatedData);
        localStorage.removeItem(id);
    };

    return (
        <div>
            <h1>Sellers Admin Page</h1>
            <Form onSaveData={saveData} />
            <ProductList totalPrice={totalPrice} products={products} onDeleteProduct={deleteProduct} />
        </div>
    );
}

export default App;
