import React from 'react';
import {IProduct} from '../../types';
import './Order.css';

interface IOrder {
    product: IProduct;
}

const Order: React.FC<IOrder> = ({product}) => {
    return (
        <div className="order-info">
            <b><p>{product.name}</p></b>
            <b><p>x{product.count}</p></b>
            <b><p>= {product.price * product.count} KGS</p></b>
        </div>
    );
};

export default Order;