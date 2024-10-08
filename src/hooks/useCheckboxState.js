import { useState } from 'react';

export const useCheckboxState = ({ sizes }) => {
  const [checkedState, setIsCheckedState] = useState(new Array(sizes?.length).fill(false));
  const [size, setSize] = useState({});
  const [checkboxIndex, setCheckIndex] = useState('');

  const handleOption = (position, size) => {
    const updatedChecked = checkedState.map((item, index) => (index === position ? !item : false));
    setIsCheckedState(updatedChecked);
    setSize(size);
    setCheckIndex(position);
  };

  return { handleOption, checkedState, size, checkboxIndex, setIsCheckedState };
};
