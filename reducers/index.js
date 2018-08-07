import { searchDeck } from '../utils/helpers.js';
import { SAVE_DECK_TITLE, SAVE_CARD_DECK } from '../actions';

const initialState = {};

const reducer = (state = initialState, action) => {
	switch(action.type){
		case SAVE_DECK_TITLE:
			return {
				...state,
				[action.deck.id]: action.deck
			};
		case SAVE_CARD_DECK:
			const deck = searchDeck(action.idDeck, state);
			
			if(!deck.questions){
				deck.questions = [ action.card ];
			}else{
				deck.questions = [ ...deck.questions, action.card ];
			}
			
			return {
				...state,
				[action.idDeck]: deck
			};
		default:
			return state;
	}
}

export default reducer;