
import { Button, Typography } from '@mui/material';

const Home: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h3" gutterBottom>
        Bienvenue sur notre jeu de société !
      </Typography>
      <Typography variant="h6">
        Découvrez les règles et amusez-vous à jouer avec vos amis.
      </Typography>
      <Button variant="contained" color="primary" href="/rules">
        Voir les règles
      </Button>
    </div>
  );
};

export default Home;
