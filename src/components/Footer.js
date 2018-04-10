import React from 'react';

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">&copy; Xavier Artot - Experience Airbnb: Built with: ♥️</p>
  </footer>
);

Footer.propTypes = {
  timeout: React.PropTypes.bool,
};

export default Footer;
