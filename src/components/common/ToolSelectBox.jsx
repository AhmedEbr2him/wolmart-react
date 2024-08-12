/* eslint-disable react/prop-types */
import { IoIosArrowDown } from 'react-icons/io';

const ToolSelectBox = ({ selectedList, label, selectName, selectId, className }) => {
  return (
    <div className='toolbox-item'>
      {label && <label htmlFor={selectId}>{label}:</label>}
      <select
        name={`${selectName}-select`}
        id={selectId}
        autoComplete='off'
        className={`form-control ${className}`}
      >
        {selectedList.map((item, index) => (
          <option key={index} defaultValue={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <span>
        <IoIosArrowDown />
      </span>
    </div>
  );
};
export default ToolSelectBox;
