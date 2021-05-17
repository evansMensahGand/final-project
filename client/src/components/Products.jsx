import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

// fuction for sending requests to data base
const fetchQuery = async ({ uri, method = "GET", body = null }) => {
  const response = await fetch(uri, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body !== null ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};

const Products = () => {
  const [products, setProducts] = useState([]);
  // const [imgName, setImgName] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchQuery({ uri: "http://localhost:4040/products" });
      // console.log(data);
      setProducts(data.product);
      console.log(products);
    };
    fetchData();
  }, [products]);

  

  return (
    <Styles>
      <div className="products">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            pImg={`/image/${product.name}${index}.jpg`}
            productName={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </Styles>
  );
};

export default Products;

const Styles = styled.div`
  .products {
    padding: 2rem 4rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 2rem;
  }
`;
