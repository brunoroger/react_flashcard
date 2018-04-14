import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { gray, white } from './utils/colors.js';
import Deck from './Deck';
import NewDeck from './NewDeck';
import DeckDetails from './DeckDetails';
import Quest from './Quest';
import Answer from './Answer';
import AddCard from './AddCard';

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
  Answer: {
	screen: Answer
  },
  AddCard: {
	screen: AddCard
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
		<Stack/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
