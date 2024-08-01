/* eslint-disable react/prop-types */
import { LinkUnderline, SectionTitle } from '../';

const TitleLink = ({ title, to }) => {
  return (
    <div className='title-link-wrapper'>
      <SectionTitle title={title} />
      <LinkUnderline label='more products' to={to} />
    </div>
  );
};
export default TitleLink;
