import React from 'react';
import Container from 'react-bootstrap/Container';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard/ProductCard';
import { HomeStyles } from '../styles/HomeStyles';

const HomePage: React.FC = () => {
    return (
        <>
            <Container>
                <HomeStyles>
                    <div className='homepage-wrapper'>
                        <div><h2>Products List</h2></div>
                        <div className='product-list'>
                            {products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </HomeStyles>
            </Container>
        </>

    );
};

export default HomePage;
