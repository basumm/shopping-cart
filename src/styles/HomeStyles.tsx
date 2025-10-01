import styled from 'styled-components';

export const HomeStyles = styled.div`
  .homepage-wrapper {
    padding: 2rem 0;
  }

  .product-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 cards per row */
    gap: 24px;
    margin-top: 20px;
  }

  @media (max-width: 1200px) {
    .product-list {
      grid-template-columns: repeat(3, 1fr); /* 3 per row */
    }
  }

  @media (max-width: 768px) {
    .product-list {
      grid-template-columns: repeat(2, 1fr); /* 2 per row */
    }
  }

  @media (max-width: 480px) {
    .product-list {
      grid-template-columns: 1fr; /* 1 per row */
    }
  }
`;