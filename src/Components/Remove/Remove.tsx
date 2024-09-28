import React from 'react';
import {IProduct} from '../../types';
import './Remove.css';

interface IRemove {
    product: IProduct;
    onRemove: (name: string) => void;
}

const Remove: React.FC<IRemove> = ({product, onRemove}) => {
    return (
        <button type="button" className="remove-btn" onClick={() => onRemove(product.name)}></button>
    );
};

export default Remove;