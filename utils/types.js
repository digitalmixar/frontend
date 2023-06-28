import PropTypes from "prop-types";

export const linkPropTypes = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  to: PropTypes.string.isRequired,
  label: PropTypes.string,
  target: PropTypes.string,
});

export const mediaPropTypes = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  alternativeText: PropTypes.string,
  mime: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const buttonLinkPropTypes = PropTypes.shape({
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  target: PropTypes.string,
  to: PropTypes.shape({
    to: PropTypes.string,
  }),
});
