import './Rules.css';
import yourImage from '../../assets/images/Rules1.svg';
import yourImageBack from '../../assets/images/Rules2.svg';
import { useState } from 'react';

const Rules: React.FC = () => {
  const [flipped, setFlipped] = useState(false);
  const [buttonColor, setButtonColor] = useState('#f7a83e');

  const handleFlip = () => {
    setFlipped(!flipped);
    setButtonColor(buttonColor === '#f7a83e' ? '#034c8d' : '#f7a83e');
  };

  return (
    <div className="rules-container">
      <h1 className="rules-title">Game Rules</h1>
      <div className="image-container">
        <img 
          src={flipped ? yourImageBack : yourImage} 
          alt="Description de l'image" 
          className={`rules-image ${flipped ? 'flipped' : ''}`} 
        />
        <button 
          className="flip-button" 
          style={{ backgroundColor: buttonColor }}
          onClick={handleFlip}
        >
          Turn me
        </button>
      </div>
    </div>
  );
};

export default Rules;