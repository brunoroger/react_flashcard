import { AsyncStorage } from 'react-native';

export const KEY = 'react:flashcard';

export function saveDeckTitle(title){
	return AsyncStorage.mergeItem(KEY, JSON.stringify({
		[title]: title
	}));
}