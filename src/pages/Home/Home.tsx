import { Typography } from '@mui/material';
import './Home.css';

const Home: React.FC = () => {

  
  return (
    <div className='main'>
      <Typography variant="h3" gutterBottom>
        Welcome to the Mind Words platform!
      </Typography>
      <Typography variant="h6">
        There you will find the rules, the glossary and our generation tools to start your game of Mind Words.
      </Typography>
      
      <div className="video-container"> {/* Bloc pour la vidéo */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
