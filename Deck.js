import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, YellowBox } from 'react-native';
import { getDecks } from './utils/api';

export default class Deck extends React.Component {
	constructor(props){
		super(props);
		
		YellowBox.ignoreWarnings([
			'Warning: componentWillMount is deprecated',
			'Warning: componentWillReceiveProps is deprecated',
		]);
	}
	
	state = {
		decks: []
	};
	
	componentDidMount(){
		getDecks().then((res) => {
			this.setState({ decks: res });
		});
	}
	
	render(){
		return(
			<View style={styles.container}>
				{this.state.decks.map((deck) => (
					<TouchableOpacity key={deck.id} style={styles.box} onPress={() => this.props.navigation.navigate('DeckDetails', {
						idDeck: deck.id
					})}>
						<Text style={styles.title}>{deck.title}</Text>
						<Text style={styles.subTitle}>3 cards</Text>
					</TouchableOpacity>
				))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	alignItems: 'stretch'
  },
  box: {
    height: 160,
    backgroundColor: 'white',
	borderBottomColor: '#47315a',
	borderBottomWidth: 1,
	justifyContent: 'center',
	alignItems: 'center'
  },
  title: {
	fontSize: 30
  },
  subTitle: {
	color: 'gray'
  }
});