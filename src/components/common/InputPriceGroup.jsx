import { FiMinus, FiPlus } from 'react-icons/fi';
import { useProductQty } from '../../hooks/useProductQty';

const InputPriceGroup = ({ quantity }) => {
  const { handleDecreaseQty, handleIncreaseQty, handleOnChangeQty } = useProductQty();

  return (
    <div className='input-group'>
      <input type='number' name='qantity' value={quantity} onChange={handleOnChangeQty} />
      <button className='qty-plus' aria-label='plus' onClick={handleIncreaseQty}>
        <FiPlus />
      </button>
      <button className='qty-minus' aria-label='minus' onClick={handleDecreaseQty}>
        <FiMinus />
      </button>
    </div>
  );
};
export default InputPriceGroup;
