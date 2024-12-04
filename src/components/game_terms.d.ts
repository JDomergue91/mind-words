declare module '../../components/game_terms' {
    interface GameTerm {
        word: string;
        definition: string;
    }

    const gameTerms: GameTerm[];
    export default gameTerms;
}
