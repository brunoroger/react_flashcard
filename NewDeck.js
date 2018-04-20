import React from 'react';
import { StyleSheet, Text, TouchableOpacity, YellowBox, TextInput, View } from 'react-native';
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { saveDeckTitle } from './actions';
//import { saveDeckTitle } from './utils/api';

const mapDispatchToProps = dispatch => {
	return {
		saveDeckTitle: (id, title) => dispatch(saveDeckTitle(id, title))
	};
};

class NewDeck extends React.Component {
	constructor(props) {
	 
	   super(props);
	 
	   YellowBox.ignoreWarnings([
		'Warning: componentWillMount is deprecated',
		'Warning: componentWillReceiveProps is deprecated',
	  ]); 
	}
	
	state = {
		title: ''
	};
	
	handleSubmit = () => {
		//saveDeckTitle(this.state.title);
		const id = uuidv1();
		
		this.props.saveDeckTitle(id, this.state.title);
	};
	
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.title}>What is the title of your new deck?</Text>
				<TextInput style={styles.input} onChangeText={(title) => { this.setState({title}); }} placeholder = "Deck Title"/>
				<TouchableOpacity style={styles.submitButton} onPress={() => { this.handleSubmit(); } }>
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

export default connect(null, mapDispatchToProps)(NewDeck);