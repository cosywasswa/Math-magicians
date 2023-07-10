import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/navbar.scss';

function Navbar() {
  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 1.5rem',

  };
  return (
    <nav className="nav" style={navStyle}>
      <Link to="/"><h1>Math Magicians</h1></Link>

      <ul>
        <CustomLink className="border" to="/">Home</CustomLink>
        <CustomLink className="border" to="/Calculator">Calculator</CustomLink>
        <CustomLink className="lastLink" to="/Quotes">Quotes</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({
  to, children, className, style,
}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const linkStyle = {
    color: isActive ? 'red' : 'blue',
    ...style,
  };
  return (
    <li className={`${isActive ? 'active' : ''} ${className}`}>
      <Link to={to} style={linkStyle}>
        {children}
      </Link>
    </li>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
};

CustomLink.defaultProps = {
  style: {},
};

export default Navbar;
