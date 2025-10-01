import styled from "styled-components";

export const LayoutStyles = styled.div`

.common-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: sans-serif;
  background-color: #f9f9f9;
}

.layout-main {
  flex: 1;
  padding: 16px;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

/* Responsive typography and spacing */
@media (max-width: 768px) {
  .layout-main {
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .layout-main {
    padding: 8px;
  }
}


`

