import React from 'react';
import {IProduct} from '../../types';
import './Order.css';

interface IOrder {
    product: IProduct;
    onRemove: (name: string) => void;
}

const Order: React.FC<IOrder> = ({product, onRemove}) => {
    return (
        <div className="order-info">
            <b><p>{product.name}</p></b>
            <b><p>x{product.count}</p></b>
            <b><p>= {product.price * product.count} KGS</p></b>
            <button type="button" className="remove-btn" onClick={() => onRemove(product.name)}></button>
        </div>
    );
};

export default Order;