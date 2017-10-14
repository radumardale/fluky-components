import PropTypes from 'prop-types';

export default PropTypes.shape({
  displayName: PropTypes.string.isRequired,
  link: PropTypes.string,
  children : PropTypes.array
});
