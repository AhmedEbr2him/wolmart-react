/* eslint-disable react/prop-types */
const Introduce = ({ title, paragraph }) => {
  return (
    <section className='section content-title-section'>
      <h2 className='title'>{title}</h2>
      <p>{paragraph}</p>
    </section>
  );
};
export default Introduce;
