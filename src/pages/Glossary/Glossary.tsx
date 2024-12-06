import { useState } from 'react';
import gameTerms from '../../components/GameTerms/game_terms';
import './Glossary.css';

const Glossary: React.FC = () => {
    const [terms] = useState(gameTerms);

    return (
      <div>
        <h1 style={{ color: '#034c8d' }}>Glossary</h1>
        <p style={{ color: '#034c8d' }}>Here is the list of terms and words used in the game.</p>
        <div className="word-table-container">
          <table className="word-table">
            <thead>
              <tr>
                <th className='firstColumn'>Word</th>
                <th className='secondeColumn'>Definition</th>
              </tr>
            </thead>
            <tbody>
              {terms.map((item, index) => (
                <tr key={index}>
                  <td>{item.word}</td>
                  <td>{item.definition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Glossary;