import React from 'react';
import { StyleSheet, Text, View, YellowBox, TouchableOpacity } from 'react-native';
import { getDeck } from './utils/api';

export default class DeckDetails extends React.Component {
	constructor(props) {
	 
	   super(props);
	 
	   YellowBox.ignoreWarnings([
		'Warning: componentWillMount is deprecated',
		'Warning: componentWillReceiveProps is deprecated',
	  ]); 
	}
	
	state = {
		deck: null
	}
	
	componentDidMount(){
		getDeck(this.props.navigation.state.params.idDeck)
		.then((res) => {
			this.setState({ ...this.state, deck: res });
		});
	}
	
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.title}>{this.state.deck.title}</Text>
				<Text style={styles.subTitle}>3 cards</Text>
				<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AddCard')}>
					<Text>Add Card</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonBlack} onPress={() => this.props.navigation.navigate('Quest')}>
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