import React, { useEffect, useState } from "react";
import "./App.css";
import Form from './components/Form';
import ProductList from './components/ProductList.jsx';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('Products'));
        if (storedData && storedData.length > 0) {
            setProducts(storedData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('Products', JSON.stringify(products));
    }, [products]);

    const saveData = (data) => {
        setProducts(prevState => ([
            ...prevState, data
        ]));
    };

    const totalPrice = products.reduce(
        (accumulator, product) => accumulator + parseInt(product.product_Price),
        0
    );

    const deleteProduct = (id) => {
        const updatedData = products.filter((c) => c.product_id !== id);
        setProducts(updatedData);
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
