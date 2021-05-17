import styled from "styled-components";
import Carousel from "../components/Carousel";
// import Products from "../components/Products";
import "react-responsive-carousel/lib/styles/carousel.min.css"

const LandingPage = () => {
  return (
    <Styled>
      <div className="landingpage">
        {/* <Products/>
         */}
         
         <Carousel/>
      </div>
    </Styled>
  );
};

export default LandingPage;

const Styled = styled.div`
  .landingpage {
   
  }
`;
