import { SAVE_DECK_TITLE } from '../actions';

const initialState = {};

const reducer = (state = initialState, action) => {
	switch(action.type){
		case SAVE_DECK_TITLE:
			return {
				...state,
				[action.deck.id]: action.deck
			};
		default:
			return state;
	}
}

export default reducer;