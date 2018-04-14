import React from 'react';
import { StyleSheet, Text, View, YellowBox, TouchableOpacity } from 'react-native';

export default class Quest extends React.Component {
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
				<Text style={styles.title}>Does React Native work with Android?</Text>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Answer')}>
					<Text style={styles.subTitle}>Answer</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.textWhite}>Correct</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonRed}>
					<Text style={styles.textWhite}>Incorrect</Text>
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
		color: 'red'
	},
	textWhite: {
		color: 'white'
	},
	button: {
      backgroundColor: 'green',
      padding: 10,
      margin: 15,
      height: 40,
   },
   buttonRed: {
	  backgroundColor: 'red',
      padding: 10,
      margin: 15,
      height: 40,
   }
});