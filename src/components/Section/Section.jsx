import PropTypes from 'prop-types';
import { SectionBlock, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionBlock>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionBlock>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
