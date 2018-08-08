import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, YellowBox } from 'react-native';
import { connect } from "react-redux";
import { toArray } from './utils/helpers';
import { saveDeckTitle, saveCardDeck } from './actions';
import * as LocalStorageApi from './utils/api';

const mapStateToProps = state => {
	return {
		decks: toArray(state.decks)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		saveDeckTitle: (id, title) => dispatch(saveDeckTitle(id, title)),
		saveCardDeck: (id, card) => dispatch(saveCardDeck(id, card))
	};
};

class Deck extends React.Component {
	constructor(props){
		super(props);
		
		YellowBox.ignoreWarnings([
			'Warning: componentWillMount is deprecated',
			'Warning: componentWillReceiveProps is deprecated',
		]);
	}
	
	componentDidMount(){
		LocalStorageApi.getDecks().then((resul) => {
			if(resul){
				resul.map((deck) => {
					this.props.saveDeckTitle(deck.id, deck.title);
					if (deck.questions) {
						deck.questions.map((question) => {
							this.props.saveCardDeck(deck.id, question);
						});
					}
				});
			}
		});
	}

	render(){
		return(
			<View style={styles.container}>
				{this.props.decks.map((deck) => (
					<TouchableOpacity key={deck.id} style={styles.box} onPress={() => this.props.navigation.navigate('DeckDetails', {
						deck
					})}>
						<Text style={styles.title}>{deck.title}</Text>
						<Text style={styles.subTitle}>{JSON.stringify(deck)}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Deck);