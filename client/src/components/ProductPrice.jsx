import styled from "styled-components"

const ProductPrice = ({productPrice}) => {
  return (
    <Styles>
      <div className="productprice">{productPrice}</div>
    </Styles>
  );
}

export default ProductPrice

const Styles = styled.div `
.productprice{
  color:red;
}
`
