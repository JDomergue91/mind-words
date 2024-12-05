import { useState } from 'react';
import gameTerms from '../../components/GameTerms/game_terms';
import './WordGenerator.css';

const WordGenerator: React.FC = () => {
  const [words, setWords] = useState<{ word: string; definition: string; visible: boolean }[]>([]);

  const generateWords = () => {
    const shuffled = [...gameTerms].sort(() => 0.5 - Math.random());
    const selectedWords = shuffled.slice(0, 10).map(word => ({ ...word, visible: false }));
    setWords(selectedWords);
  };

  const toggleDefinition = (index: number) => {
    setWords(prevWords => {
      const newWords = [...prevWords];
      newWords[index].visible = !newWords[index].visible;
      return newWords;
    });
  };

  return (
    <div>
      <h1 style={{ color: '#034c8d' }}>Word Generator</h1>
      <p style={{ color: '#034c8d' }}>This page will generate a list of 10 random words for the game mechanics.</p>
      <button className="generate-button" onClick={generateWords}>Generate the List</button>

      {words.length > 0 && (
        <table className="word-table">
          <thead>
            <tr>
              <th className='firstColumn'>Word</th>
              <th className='secondeColumn'>Definition</th>
            </tr>
          </thead>
          <tbody>
            {words.map((item, index) => (
              <tr key={index}>
                <td style={{ position: 'relative' }}>
                  {item.word}
                  <button onClick={() => toggleDefinition(index)} style={{ position: 'absolute', right: '10px' }}>
                    {item.visible ? 'Hide the definition' : 'Show the definition'}
                  </button>
                </td>
                <td>
                  {item.visible ? item.definition : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WordGenerator;