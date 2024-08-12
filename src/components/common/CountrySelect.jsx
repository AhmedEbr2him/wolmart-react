import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { IoIosArrowDown } from 'react-icons/io';

const CountrySelect = () => {
  const { selectedCountry, handleSelectCountry, countries } = useContext(MainContext);
  return (
    <div className='select-box'>
      <select
        autoComplete='off'
        name='country select'
        id='country'
        value={selectedCountry}
        onChange={handleSelectCountry}
      >
        {countries.map((country, index) => (
          <option key={index} value={country.value}>
            {country.label}
          </option>
        ))}
      </select>
      <span>
        <IoIosArrowDown />
      </span>
    </div>
  );
};
export default CountrySelect;
