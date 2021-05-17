import styled from "styled-components";
import ProductButons from "./ProductButons";
import ProductDescription from "./ProductDescription";
import ProductImg from "./ProductImg";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";

const ProductCard = (props) => {
  return (
    <Styles>
      <div className="productcard">
        <ProductImg productImg={props.pImg} />
        <ProductTitle productTitle={props.productName} />
        <ProductPrice productPrice={props.price} />

        <ProductDescription productDescription={props.description} />

        <div className="buttons">
          <ProductButons btnText="buy" />
          <ProductButons btnText="view" />
        </div>
      </div>
    </Styles>
  );
};
// brandName: "Royal Lion";
// category: "Clothes";
// checked: false;
// createdAt: "2021-04-29T11:22:19.578Z";
// description: "Royal blue long sleeves";
// name: "Shirts";
// price: "GHS 250.00";

export default ProductCard;
const Styles = styled.div`
  .productcard {
    /* border: 1px solid #000; */
    width: 300px;
    height: 500px;
    display: grid;
    grid-template-rows: 350px 60px 20px 50px 20px;
    /* gap: 0.5rem; */
    padding: 1rem;
    box-shadow: 1px 2px 6px 2px #dddddd, -1px -2px 6px 6px #dddddd;
  }
  .buttons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
