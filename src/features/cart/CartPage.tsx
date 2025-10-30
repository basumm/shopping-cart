import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../../features/cart/cartSlice';
import { CartPageStyles } from '../../styles/CartPageStyles'
import Button from 'react-bootstrap/Button';
import { Trash2, Handbag } from 'lucide-react';

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const [showSuccess, setShowSuccess] = useState(false);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleBuy = () => {
    if (items.length > 0) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const handleIncrease = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Container>
        <CartPageStyles>
          <div className='cartpage-wrapper'>
            <h1>Cart <Handbag size={45} /></h1>

            {items.length === 0 ? (
              <h2 className='cart-alert mt-5'>Cart is empty</h2>
            ) : (
              <div className='product-detail-card-wrapper'>
                {items.map((item, index) => (
                  <div
                    key={index}
                    className='product-detail-card'
                  >
                    <h4>{item.title}</h4>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <p>
                      Quantity : &nbsp;
                      <Button variant="secondary" onClick={() => handleDecrease(item.id)}>-</Button>
                      <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                      <Button variant="secondary" onClick={() => handleIncrease(item.id)}>+</Button>
                    </p>
                    <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                    <Button className='btn-wrapper' variant="danger" onClick={() => handleRemove(item.id)}><div className='text'>Remove</div><div className='icon'><Trash2 size={22} /></div></Button>
                  </div>
                ))}

                <h3>Total: ${totalPrice.toFixed(2)}</h3>

                <Button onClick={handleBuy} style={{ marginTop: 10 }}>
                  Buy Items
                </Button>

                {showSuccess && (
                  <p style={{ color: 'green', marginTop: 10 }}>
                    Purchase successful!
                  </p>
                )}
              </div>
            )}
          </div>
        </CartPageStyles>
      </Container>
    </>
  );
};

export default CartPage;
