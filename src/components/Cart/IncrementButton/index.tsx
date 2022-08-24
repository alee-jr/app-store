import { ChangeEvent, useCallback } from "react";
import { useAppDispatch } from "../../../store/hook";
import {
  changeQuantity,
  decrementQuantity,
  incrementQuantity,
} from "../../../store/slices/cartSlice";
import { Wrapper, Button, InputNumber } from "./styles";

interface IncrementButtonProps {
  id: number;
  quantity: number;
}

const IncrementButton: React.FC<IncrementButtonProps> = ({ id, quantity }) => {
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      let { value, min, max, validity } = event.currentTarget;
      value = String(
        Math.max(Number(min), Math.min(Number(max), Number(value)))
      );
      dispatch(
        changeQuantity({
          id,
          quantity: Number(validity.valid ? value : quantity),
        })
      );
    },
    [dispatch, id, quantity]
  );

  return (
    <Wrapper>
      <Button
        data-testid="decrement"
        onClick={() => dispatch(decrementQuantity(id))}
      >
        -
      </Button>
      <InputNumber
        type="text"
        pattern="[0-9]*"
        data-testid="inputNumber"
        min="1"
        max="100"
        value={quantity}
        onChange={handleChange}
      />
      <Button
        data-testid="increment"
        onClick={() => dispatch(incrementQuantity(id))}
      >
        +
      </Button>
    </Wrapper>
  );
};

export default IncrementButton;
