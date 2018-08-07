import React from 'react';
import { StyleSheet, Text, View, YellowBox, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

const mapStateToProps = state => {
	return {
		score: state.score
	};
};

class Score extends React.Component {
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
				<Text style={styles.title}>Pontuação</Text>
				<Text style={styles.subTitle}>{this.props.score} pontos</Text>
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

export default connect(mapStateToProps)(Score);