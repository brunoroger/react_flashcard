import React from 'react';
import { StyleSheet, Text, View, YellowBox, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { searchDeck } from './utils/helpers';

const mapStateToProps = state => {
	return {
		getDeck: (id) => {
			return searchDeck(id, state.decks);
		}
	};
};

class DeckDetails extends React.Component {
	constructor(props) {
	 
	   super(props);
	 
	   YellowBox.ignoreWarnings([
		'Warning: componentWillMount is deprecated',
		'Warning: componentWillReceiveProps is deprecated',
	  ]); 
	}

	idDeck = this.props.navigation.state.params.idDeck;

	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.title}>{this.props.getDeck(this.idDeck).title}</Text>
				<Text style={styles.subTitle}>{this.props.getDeck(this.idDeck).questions ? this.props.getDeck(this.idDeck).questions.length : 0} cards</Text>
				<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AddCard',{
					idDeck: this.idDeck
				})}>
					<Text>Add Card</Text>
				</TouchableOpacity>
				{this.props.getDeck(this.idDeck).questions && this.props.getDeck(this.idDeck).questions.length > 0 && (
					<TouchableOpacity style={styles.buttonBlack} onPress={() => this.props.navigation.navigate('Quest', {
						questions: this.props.getDeck(this.idDeck).questions,
						index: 0,
						idDeck: this.idDeck
					})}>
						<Text style={styles.textWhite}>Start Quiz</Text>
					</TouchableOpacity>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 30
	},
	subTitle: {
		color: 'gray'
	},
	textWhite: {
		color: 'white'
	},
	button: {
      backgroundColor: 'white',
      padding: 10,
      margin: 15,
      height: 40,
   },
   buttonBlack: {
	  backgroundColor: 'black',
      padding: 10,
      margin: 15,
      height: 40,
   }
});

export default connect(mapStateToProps)(DeckDetails);