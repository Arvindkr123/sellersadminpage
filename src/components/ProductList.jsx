import React from 'react'

const ProductList = ({ data, onDeleteHandler}) => {
    let total = 0;
    return (
        <div>
            <ul>
                <h3>Products</h3>
                {data.map((curEle) => (
                    <li key={curEle.product_id}>
                        {curEle.product_id} - {curEle.selling_Price} -  {curEle.product_Name}
                        <span>
                            <button type='button' onClick={()=>onDeleteHandler(curEle.product_id)}>Delete Product</button>
                        </span>
                     <h2>Total value worth of the Product {total += Number(curEle.selling_Price)}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;
