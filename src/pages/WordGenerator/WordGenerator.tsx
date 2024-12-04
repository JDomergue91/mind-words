import { useState } from 'react';
import gameTerms from '../../components/GameTerms/game_terms';
import './WordGenerator.css';

const WordGenerator: React.FC = () => {
  const [words, setWords] = useState<{ word: string; definition: string }[]>([]);
  const generateWords = () => {
    const shuffled = [...gameTerms].sort(() => 0.5 - Math.random());
    const selectedWords = shuffled.slice(0, 10);
    setWords(selectedWords);
  };

  return (
    <div>
      <h1 style={{ color: '#034c8d' }}>Word Generator</h1>
      <p style={{ color: '#034c8d' }}>This page will generate a list of 10 random words for the game mechanics.</p>
      <button className="generate-button" onClick={generateWords}>Generate the List</button>

      {words.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tbody>
            {words.map((item, index) => (
              <tr key={index}>
                <td>{item.word}</td>
                <td>{item.definition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WordGenerator;
