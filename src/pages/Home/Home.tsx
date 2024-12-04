
import { Typography } from '@mui/material';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className='main'>
      <Typography variant="h3" gutterBottom>
        Bienvenue sur notre jeu de société !
      </Typography>
      <Typography variant="h6">
        Découvrez les règles et amusez-vous à jouer avec vos amis.
      </Typography>
    </div>
  );
};

export default Home;
