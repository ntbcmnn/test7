import './App.css';
import {useState} from 'react';

import tea from './assets/tea.jpg';
import coffee from './assets/coffee.svg';
import juice from './assets/juice.jpg';
import hamburger from './assets/hamburger.jpg';
import cheeseburger from './assets/cheeseburger.jpg';
import fries from './assets/fries.jpg';

import {IProduct} from './types';
import Add from './Components/Add/Add.tsx';
import Remove from './Components/Remove/Remove.tsx';

const App = () => {

    // const [price, setPrice] = useState<number>(0);

    const [products, setProducts] = useState<IProduct[]>([
        {name: 'Tea', count: 0, price: 100, image: tea},
        {name: 'Hamburger', count: 0, price: 210, image: hamburger},
        {name: 'Coffee', count: 0, price: 170, image: coffee},
        {name: 'Cheeseburger', count: 0, price: 220, image: cheeseburger},
        {name: 'Juice', count: 0, price: 120, image: juice},
        {name: 'Fries', count: 0, price: 180, image: fries}
    ]);

    const addProduct = (name: string): void => {
        const copyProducts: IProduct[] = products.map(product => {
            if (product.name === name) {
                return {
                    ...product, count: product.count + 1
                };
            }
            return product;
        });
        setProducts(copyProducts);
    };

    const removeProduct = (name: string): void => {
        const copyProducts: IProduct[] = products.map(product => {
            if (product.name === name && product.count !== 0) {
                return {
                    ...product, count: product.count - 1
                };
            }
            return product;
        });
        setProducts(copyProducts);
    };

    return (
        <>
            <div className="container">
                {products.map((product, id) => {
                    return product ? (
                        <div className="product" key={id}>
                            <Add key={id} product={product} onAdd={() => addProduct}/>
                            <Remove key={id + 1} product={product} onRemove={() => removeProduct}/>
                        </div>
                    ) : null;
                })}
            </div>
        </>
    );
};

export default App;
