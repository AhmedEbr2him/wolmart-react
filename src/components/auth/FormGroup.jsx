/* eslint-disable react/prop-types */
const FormGroup = ({ label, id, type }) => {
  return (
    <div className='form-group'>
      <label htmlFor={id}>{label} *</label>
      <input type={type} name={id} id={id} className='form-control' />
    </div>
  );
};
export default FormGroup;
