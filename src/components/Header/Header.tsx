import { List, ListItem, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom'; // Utilisation de react-router pour la navigation
import logo from '../../assets/images/MindWords-logo.png'; // Assurez-vous que le chemin est correct
import './Header.css'; // Importer le fichier CSS pour le style

const Header: React.FC = () => {
  const location = useLocation(); // Récupérer l'emplacement actuel

  return (
    <div className="header-container">
      <div>
        <Link to="/" className="logo-link"> {/* Lien vers la page principale */}
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