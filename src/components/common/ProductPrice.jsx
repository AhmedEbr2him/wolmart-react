/* eslint-disable react/prop-types */
const ProductPrice = ({ price }) => {
  return (
    <div className='product-price'>
      {Number(price.new) > 0 && <ins className='new-price'>${Number(price.new)}</ins>}
      {Number(price.old) > 0 && <del className='old-price'>${Number(price.old)}</del>}
    </div>
  );
};
export default ProductPrice;
