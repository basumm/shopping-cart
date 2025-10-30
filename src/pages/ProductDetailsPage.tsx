import React from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard/ProductCard';
import { ProductDetailsStyles } from '../styles/ProductDetailsStyles';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <div>Product not found</div>;

  return (
    <>
      <Container>
        <ProductDetailsStyles>
          <div className='product-detail-page-wrapper'>
            <h2>Product Details</h2>
            <div className='product-card'>
              <div className='prod'><ProductCard product={product} showDetailsLink={false} /></div>
              <div className='prod-desc'><p>{product.description}</p></div>
            </div>
          </div>
        </ProductDetailsStyles >
      </Container>

    </>

  );
};

export default ProductDetailsPage;
