import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
export default function () {
  return (
    <div className="tex">
      <h1> ALPHA MARKET</h1>
      <p>
        <h3>The young and old would forever wear classic. </h3>
          <h4>"Courtesy: Alpha Market"</h4>
      </p>
      <Carousel className="carousel">
        <div>
          <img src="/image/slide1.jpg" alt="" />
          <p>one</p>
        </div>
        <div>
          <img src="/image/slide9.jpg" alt="" />
          <p>two</p>
        </div>
        <div>
          <img src="/image/slide4.jpg" alt="" />
          <p>three</p>
        </div>
        <div>
          <img src="/image/slide2.jpg" alt="" />
          <p>four</p>
        </div>
        <div>
          <img src="/image/slide10.jpg" alt="" />
          <p>five</p>
        </div>
        <div>
          <img src="/image/slide5.jpg" alt="" />
          <p>six</p>
        </div>
        <div>
          <img src="/image/slide6.jpg" alt="" />
          <p>seven</p>
        </div>
        <div>
          <img src="/image/slide7.jpg" alt="" />
          <p>eight</p>
        </div>
        <div>
          <img src="/image/slide8.jpg" alt="" />
          <p>nine</p>
        </div>
      </Carousel>
    </div>
  );
}
