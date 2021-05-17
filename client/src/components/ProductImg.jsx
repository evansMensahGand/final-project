import styled from "styled-components";

const ProductImg = ({ productImg }) => {
  return (
    <Styles>
      <div className="productimg">
        <img src={productImg} alt="" />
      </div>
    </Styles>
  );
};

export default ProductImg;

const Styles = styled.div`
  .productimg {
    width: calc(300px-2rem);
    padding: 0.5rem;
    object-fit: cover;
    /* overflow: hidden; */
    height:100%;
  }
  .productimg > img {
    width: 100%;
    height:100%;
    
  }
`;
