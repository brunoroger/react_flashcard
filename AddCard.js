import React from 'react';
import { StyleSheet, Text, View, YellowBox, TextInput, TouchableOpacity } from 'react-native';

export default class AddCard extends React.Component {
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
				<TextInput style={styles.input} placeholder = "Card Title"/>
				<TextInput style={styles.input} placeholder = "Answer"/>
				<TouchableOpacity style={styles.submitButton}>
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