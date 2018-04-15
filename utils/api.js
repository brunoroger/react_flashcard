import { AsyncStorage } from 'react-native';
import uuidv1 from "uuid";

export const KEY = 'react:flashcard';

export function saveDeckTitle(title){
	const key = uuidv1();
	
	return AsyncStorage.mergeItem(KEY, JSON.stringify({
		[key]: { title }
	}));
}

export function toArray(obj){
	let array = [];
	const keys = Object.keys(obj);
	
	keys.map(key => {
		array = [ ...array, obj[key] ];
	});
	
	return array;
}

export function getDecks(){
	return AsyncStorage.getItem(KEY)
	.then((resul) => {
		return toArray(JSON.parse(resul));
	});
}