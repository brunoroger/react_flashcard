import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { gray, white } from './utils/colors.js';
import reducer from './reducers';
import Deck from './Deck';
import NewDeck from './NewDeck';
import DeckDetails from './DeckDetails';
import Quest from './Quest';
import AddCard from './AddCard';
import Score from './Score';

const Tabs = TabNavigator({
  Deck: {
    screen: Deck,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: gray,
    style: {
      height: 56,
      backgroundColor: white,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});

const Stack = StackNavigator({
  Home: {
	screen: Tabs
  },
  DeckDetails: {
    screen: DeckDetails
  },
  Quest: {
	screen: Quest
  },
  AddCard: {
	screen: AddCard
  },
  Score: {
  screen: Score
  }
});

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
	  <Provider store={store}>
		  <View style={styles.container}>
			<Stack/>
		  </View>
	  </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
