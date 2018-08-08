import React from 'react';
import { StyleSheet, Text, View, YellowBox, TextInput, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { saveCardDeck } from './actions';
import * as LocalStorageApi from './utils/api';

const mapDispatchToProps = dispatch => {
	return {
		saveCardDeck: (id, card) => dispatch(saveCardDeck(id, card))
	};
};

class AddCard extends React.Component {
	constructor(props) {
	 
	   super(props);
	 
	   YellowBox.ignoreWarnings([
		'Warning: componentWillMount is deprecated',
		'Warning: componentWillReceiveProps is deprecated',
	  ]); 
	}
	
	state = {
		title: '',
		answer: ''
	};
	
	handleSubmit = () => {
		LocalStorageApi.addCardToDeck(this.props.navigation.state.params.idDeck, this.state)
		.then(() => {
			this.props.saveCardDeck(this.props.navigation.state.params.idDeck, this.state);
		});
	};
	
	render(){
		return(
			<View style={styles.container}>
				<TextInput style={styles.input} onChangeText={(title) => { this.setState({ ...this.state, title }); }} placeholder = "Card Title"/>
				<TextInput style={styles.input} onChangeText={(answer) => { this.setState({ ...this.state, answer }); }} placeholder = "Answer"/>
				<TouchableOpacity style={styles.submitButton} onPress={this.handleSubmit}>
					<Text style={styles.submitButtonText}>Submit</Text>
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
		fontSize: 50
	},
	input: {
		height: 40,
		width: '100%',
		margin: 15,
		borderColor: 'black',
		borderWidth: 1
	},
	submitButton: {
      backgroundColor: 'black',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
});

export default connect(null, mapDispatchToProps)(AddCard);