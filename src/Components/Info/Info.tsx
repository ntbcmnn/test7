import React from 'react';
import {IProduct} from '../../types';
import './Info.css';

interface IInfo {
    product: IProduct;
}

const Info: React.FC<IInfo> = ({product}) => {
    return (
        <div className="info">
            <h4>{product.name}</h4>
            <p>{product.price} KGS</p>
        </div>
    );
};

export default Info;