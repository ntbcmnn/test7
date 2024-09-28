import React from 'react';
import {IProduct} from '../../types';
import './Add.css';

interface IAdd {
    product: IProduct;
    onAdd: (name: string) => void;
}
const Add: React.FC<IAdd> = ({product, onAdd}) => {
    return (
        <button type="button" className="add-btn" onClick={() => onAdd(product.name)}>
            <img src={product.image} alt={product.name}/>
        </button>
    );
};

export default Add;