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
	
	onPress = () => this.props.navigation.navigate('Quest',{
		questions: this.props.navigation.state.params.questions,
		index: (this.props.navigation.state.params.index + 1)
	});

	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.title}>{this.props.navigation.state.params.questions[this.props.navigation.state.params.index].title}</Text>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Answer')}>
					<Text style={styles.subTitle}>Answer</Text>
				</TouchableOpacity>
				{(this.props.navigation.state.params.questions.length - 1) !== this.props.navigation.state.params.index && (
					<View><TouchableOpacity style={styles.button} onPress={this.onPress}>
						<Text style={styles.textWhite}>Correct</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonRed} onPress={this.onPress}>
						<Text style={styles.textWhite}>Incorrect</Text>
					</TouchableOpacity></View>
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