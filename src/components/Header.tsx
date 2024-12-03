import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom'; // Utilisation de react-router pour la navigation

const Header: React.FC = () => {
  return (
    <div>
      <List>
        <ListItem component={Link} to="/">
          <ListItemText primary="Accueil" />
        </ListItem>
        <ListItem component={Link} to="/rules">
          <ListItemText primary="Règles" />
        </ListItem>
        <ListItem component={Link} to="/glossary">
          <ListItemText primary="Glossaire" />
        </ListItem>
        <ListItem component={Link} to="/word-generator">
          <ListItemText primary="Générateur de mots" />
        </ListItem>
        <ListItem component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </div>
  );
};

export default Header;
