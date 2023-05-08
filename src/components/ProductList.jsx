import React from "react";

const ProductList = ({ products, totalPrice, onDeleteProduct }) => {
    return (
        <ul>
            {
                products.map((item) => (
                    <li key={item.product_id}>
                        {item.product_id} - {item.product_Price} - {item.product_Name}
                        <span><button type='button' onClick={() => onDeleteProduct(item.product_id)}>Delete Product</button></span>
                    </li>
                ))
            }
            {totalPrice > 0 && <h2>Total worth of the product {totalPrice}</h2>}
        </ul>
    )
}

export default ProductList;