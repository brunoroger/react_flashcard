import { AsyncStorage } from 'react-native';
import uuidv1 from "uuid";

export const KEY = 'react:flashcard';

export function saveDeckTitle(title){
	const key = uuidv1();
	
	return AsyncStorage.mergeItem(KEY, JSON.stringify({
		[key]: { id: key, title }
	}));
}

export function getDecks(){
	return AsyncStorage.getItem(KEY)
	.then((resul) => {
		return toArray(resul);
	});
}

export function getDeck(id){
	return AsyncStorage.getItem(KEY)
	.then((resul) => {
		return searchDeck(id, resul);
	});
}