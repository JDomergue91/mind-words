import { List, ListItem, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/MindWords-logo.png';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <div className="header-container">
      <div>
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo MindWords" className="logo" />
        </Link>
      </div>
      <List className="nav-list">
        <ListItem component={Link} to="/rules" className={location.pathname === '/rules' ? 'selected' : ''}>
          <ListItemText primary="Rules" />
        </ListItem>
        <ListItem component={Link} to="/glossary" className={location.pathname === '/glossary' ? 'selected' : ''}>
          <ListItemText primary="Glossary" />
        </ListItem>
        <ListItem component={Link} to="/word-generator" className={location.pathname === '/word-generator' ? 'selected' : ''}>
          <ListItemText primary="Mind Words generator" />
        </ListItem>
        <ListItem component={Link} to="/contact" className={location.pathname === '/contact' ? 'selected' : ''}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </div>
  );
};

export default Header;