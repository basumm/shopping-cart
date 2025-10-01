import React, { useState } from 'react';
import { Product } from '../../types'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import { ProductCardStyles } from './styles';
import Button from 'react-bootstrap/Button';

interface Props {
  product: Product;
  showDetailsLink?: boolean;
}

const ProductCard: React.FC<Props> = ({ product, showDetailsLink = true }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Local state for success message
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    // Show success message
    setShowSuccess(true);

    // Hide after 2 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <>
      <ProductCardStyles>
        <div key={product.id} className={product.className}>
          <h3>{product.title}</h3>
          <img className='image-wrapper' src={product.image} alt={product.title} />
          <p>${product.price}</p>

          <div className='btn-wrapper'>
            {showDetailsLink && (
              <Button variant="warning" onClick={() => navigate(`/product/${product.id}`)}>
                View Details
              </Button>
            )}
            <Button variant="success" onClick={handleAddToCart}>Add to Cart</Button>
          </div>
        </div>
        {/* Success message */}
        {showSuccess && (
          <p style={{ color: 'green', marginTop: 10 }}>Added to cart!</p>
        )}
      </ProductCardStyles>
    </>
  );
};

export default ProductCard;
