import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { HeaderStyles } from './style';
import { ShoppingCart } from 'lucide-react';


const Header = () => {
    return (
        <>
            <HeaderStyles>
                <Container>
                    <div className='nav-wrapper'>
                        <div className='logo-wrapper'>
                            <h2 className='brand-name'>Shopping Cart</h2>
                        </div>
                        <div className='nav'>
                            <div className='nave-item'>
                                <h2 className='nav-text'><Link className='nav-link' to="/">Products</Link></h2>
                                <h2><Link className='nav-link' to="/cart">Cart&nbsp;<ShoppingCart size={34} className="mx-auto text-gray-400" /></Link></h2>
                                
                            </div>
                        </div>
                    </div>
                </Container>
            </HeaderStyles>
        </>
    )
}

export default Header