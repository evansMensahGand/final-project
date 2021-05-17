import server from "../server";
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

describe("Testing Product Controller", () => {
  describe("Get App Product", () => {
    it("Should return all Products", (done) => {
      chai
        .request(server)
        .get("/products")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");
          done();
        });
    });

    it("Should not return any product", (done) => {
      chai
        .request(server)
        .get("/product")
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });

  describe("Get Single Product", () => {
    it("Should return single product", (done) => {
      const productId = "60632eb349c9ab37007b83f4";

      chai
        .request(server)
        .get(`/products/${productId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");

          done();
        });
    });

    it("Should not return any product", (done) => {
      const productId = "60632eb349c9ab37007b83f8";

      chai
        .request(server)
        .get(`/products/${productId}`)
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });

  describe("Create Product", () => {
    it("Should create a product", (done) => {
      const product = {
        name: "First Product Name",
        content: "Content from the first product.",
      };

      chai
        .request(server)
        .product(`/products`)
        .send(product)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.an("object");

          done();
        });
    });

    it("Should not create product", (done) => {
      const product = {
        content: "Content from the first product.",
      };

      chai
        .request(server)
        .product(`/products`)
        .send(product)
        .end((err, res) => {
          res.should.have.status(400);

          done();
        });
    });
  });

  describe("Update Product", () => {
    it("Should update a product", (done) => {
      const productId = "60632eb349c9ab37007b83f4";
      const product = {
        name: "First Product Name",
      };

      chai
        .request(server)
        .patch(`/products/${productId}`)
        .send(product)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");

          done();
        });
    });

    it("Should not update product", (done) => {
      const productId = "60632eb349c9ab37007b83f1";
      const product = {
        content: "Content from the first product.",
      };

      chai
        .request(server)
        .patch(`/products/${productId}`)
        .send(product)
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });

  describe("Delete Product", () => {
    it("Should delete a product", (done) => {
      const productId = "60632eb349c9ab37007b83f4";

      chai
        .request(server)
        .delete(`/products/${productId}`)
        .end((err, res) => {
          res.should.have.status(200);

          done();
        });
    });

    it("Should not update product", (done) => {
      const productId = "60632eb349c9ab37007b83f1";

      chai
        .request(server)
        .delete(`/products/${productId}`)
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });
});