import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice.js";
import { useState } from "react";

const ProductItem = ({ prod }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    const itemData = {
      ...item,
      quantity,
      totalItemPrice: item.price * quantity,
    };
    dispatch(addItem(itemData));
  };

  return (
    <div>
      <span>
        {prod.name}: - {prod.price}$
      </span>

      <div>
        <button onClick={() => setQuantity((state) => state + 1)}> + </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity((state) => state - 1)}> - </button>
      </div>

      <button onClick={() => handleAddItem(prod)}> Add to Cart</button>
    </div>
  );
};

export default ProductItem;
