import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import ProductList from './components/ProductList';

function App() {
    const [products, setProducts] = useState([])
    const saveData = (data) => {
        console.log(data);
        setProducts(prev => [...prev, { ...data }]);
    }

    const delteHandler = (id) => {
        const updatedData = products.filter((cur) => cur.product_id !== id);
        setProducts(updatedData);
    }

    return (
        <div>
            <Form onSaveData={saveData} />
            <ProductList data={products} onDeleteHandler={delteHandler} />
        </div>
    );
}

export default App;
