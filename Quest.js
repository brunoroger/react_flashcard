import React from 'react';
import { StyleSheet, Text, View, YellowBox, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { addScore } from './actions';

const mapDispatchToProps = dispatch => {
	return {
		addScore: () => dispatch(addScore())
	};
};

class Quest extends React.Component {
	constructor(props) {
	 
	   super(props);
	 
	   YellowBox.ignoreWarnings([
		'Warning: componentWillMount is deprecated',
		'Warning: componentWillReceiveProps is deprecated',
	  ]); 
	}
	
	lastIndex = () => {
		return (this.props.navigation.state.params.questions.length - 1) === this.props.navigation.state.params.index;
	}

	onPress = (correct) => {
		if (correct) {
			this.props.addScore();
		}

		if (this.lastIndex()) {
			this.props.navigation.navigate('Score');
		} else {
			this.props.navigation.navigate('Quest',{
				questions: this.props.navigation.state.params.questions,
				index: (this.props.navigation.state.params.index + 1)
			});
		}
	};

	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.title}>{this.props.navigation.state.params.index + 1}/{this.props.navigation.state.params.questions.length} - {this.props.navigation.state.params.questions[this.props.navigation.state.params.index].title}</Text>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Answer')}>
					<Text style={styles.subTitle}>Answer</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => { this.onPress(true); }}>
					<Text style={styles.textWhite}>Correct</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonRed} onPress={() => { this.onPress(false); }}>
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

export default connect(null, mapDispatchToProps)(Quest);