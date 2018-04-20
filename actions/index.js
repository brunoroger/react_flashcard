export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE';

export const saveDeckTitle = (id, title) => ({ type: SAVE_DECK_TITLE, deck: {id, title} });