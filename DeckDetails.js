import React from 'react';
import { StyleSheet, Text, View, YellowBox, TouchableOpacity } from 'react-native';

export default class DeckDetails extends React.Component {
	constructor(props) {
	 
	   super(props);
	 
	   YellowBox.ignoreWarnings([
		'Warning: componentWillMount is deprecated',
		'Warning: componentWillReceiveProps is deprecated',
	  ]); 
	}
	
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.title}>{this.props.navigation.state.params.deck.title}</Text>
				<Text style={styles.subTitle}>{JSON.stringify(this.props.navigation.state.params.deck)}</Text>
				<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AddCard',{
					idDeck: this.props.navigation.state.params.deck.id
				})}>
					<Text>Add Card</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonBlack} onPress={() => this.props.navigation.navigate('Quest', {
					questions: this.props.navigation.state.params.deck.questions,
					index: 0
				})}>
					<Text style={styles.textWhite}>Start Quiz</Text>
				</TouchableOpacity>
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