const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 100 },
];

import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div>
      <h2>Products List</h2>
      {products.map((prod) => (
        <ProductItem key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default Products;
