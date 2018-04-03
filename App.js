import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { gray, white } from './utils/colors.js';
import Deck from './Deck';
import NewDeck from './NewDeck';

const Tabs = TabNavigator({
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      tabBarLabel: 'Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
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

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
