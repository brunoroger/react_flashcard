import { searchDeck } from '../utils/helpers.js';
import { SAVE_DECK_TITLE, SAVE_CARD_DECK, ADD_SCORE } from '../actions';

const initialState = {
	decks: {},
	score: 0
};

const reducer = (state = initialState, action) => {
	switch(action.type){
		case SAVE_DECK_TITLE:
			return {
				...state,
				decks: {
					...state.decks,
					[action.deck.id]: action.deck
				}
			};
		case SAVE_CARD_DECK:
			const deck = searchDeck(action.idDeck, state.decks);
			
			if(!deck.questions){
				deck.questions = [ action.card ];
			}else{
				deck.questions = [ ...deck.questions, action.card ];
			}
			
			return {
				...state,
				decks: {
					...state.decks,
					[action.idDeck]: deck
				}
			};
		case ADD_SCORE:
			return {
				...state,
				score: state.score + 1
			};
		default:
			return state;
	}
}

export default reducer;