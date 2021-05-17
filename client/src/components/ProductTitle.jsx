import styled from "styled-components"

const ProductTitle = ({productTitle}) => {
  return (
    <Styles>
      <div className="producttitle">
        <h2>{productTitle}</h2>
      </div>
    </Styles>
  );
}

export default ProductTitle

const Styles = styled.div `
.producttile{
  font-weight:700;
}

`
