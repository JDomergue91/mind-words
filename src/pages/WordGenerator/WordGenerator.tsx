import { useState } from 'react';
import gameTerms from '../../components/game_terms'; // Assurez-vous que le chemin est correct
import './WordGenerator.css';

const WordGenerator: React.FC = () => {
  const [words, setWords] = useState<{ word: string; definition: string }[]>([]);

  const generateWords = () => {
    const shuffled = gameTerms.sort(() => 0.5 - Math.random());
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

//v2 
// import { useState } from 'react';
// import gameTerms from '../../components/game_terms'; // Assurez-vous que le chemin est correct
// import './WordGenerator.css';

// const WordGenerator: React.FC = () => {
//   const [words, setWords] = useState<{ word: string; definition: string }[]>([]);
//   const [visibleDefinitions, setVisibleDefinitions] = useState<boolean[]>([]); // État pour gérer la visibilité des définitions

//   const generateWords = () => {
//     const shuffled = gameTerms.sort(() => 0.5 - Math.random());
//     const selectedWords = shuffled.slice(0, 10);
//     setWords(selectedWords);
//     setVisibleDefinitions(new Array(selectedWords.length).fill(false)); // Réinitialise la visibilité des définitions
//   };

//   const toggleDefinition = (index: number) => {
//     const newVisibleDefinitions = [...visibleDefinitions];
//     newVisibleDefinitions[index] = !newVisibleDefinitions[index]; // Inverse la visibilité de la définition
//     setVisibleDefinitions(newVisibleDefinitions);
//   };

//   return (
//     <div>
//       <h1 style={{ color: '#034c8d' }}>Word Generator</h1>
//       <p style={{ color: '#034c8d' }}>This page will generate a list of 10 random words for the game mechanics.</p>
//       <button className="generate-button" onClick={generateWords}>Generate the List</button>

//       {words.length > 0 && (
//         <table>
//           <thead>
//             <tr>
//               <th>Word</th>
//               <th>Definition</th>
//             </tr>
//           </thead>
//           <tbody>
//             {words.map((item, index) => (
//               <tr key={index}>
//                 <td>
//                   {item.word}
//                   <button onClick={() => toggleDefinition(index)} style={{ marginLeft: '10px' }}>
//                     {visibleDefinitions[index] ? 'Hide' : 'Show'}
//                   </button>
//                 </td>
//                 <td>
//                   {visibleDefinitions[index] && item.definition} {/* Affiche la définition si visible */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default WordGenerator;