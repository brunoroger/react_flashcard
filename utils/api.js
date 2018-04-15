import { AsyncStorage } from 'react-native';
import uuidv1 from "uuid";

export const KEY = 'react:flashcard';

export function toArray(json){
	const obj = JSON.parse(json);
	
	let array = [];
	const keys = Object.keys(obj);
	
	keys.map(key => {
		array = [ ...array, obj[key] ];
	});
	
	return array;
}

export function searchDeck(id, json){
	const listDeck = toArray(json);
	let deck = null;
	
	listDeck.map(obj => {
		if(obj.id === id){
			deck = obj;
		}
	});
	
	return deck;
}

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