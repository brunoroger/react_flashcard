import React from 'react';
import { StyleSheet, Text, View, YellowBox, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { clearScore } from './actions';
import { searchDeck } from './utils/helpers';

const mapStateToProps = state => {
	return {
		score: state.score,
		getDeck: (id) => {
			return searchDeck(id, state.decks);
		}
	};
};

const mapDispatchToProps = dispatch => {
	return {
		clearScore: () => dispatch(clearScore())
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
	
	idDeck = this.props.navigation.state.params.idDeck;

	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.title}>Pontuação</Text>
				<Text style={styles.subTitle}>{this.props.score} pontos</Text>
				<TouchableOpacity style={styles.buttonBlack} onPress={() => {
					this.props.clearScore();
					this.props.navigation.navigate('Quest', {
						questions: this.props.getDeck(this.idDeck).questions,
						index: 0,
						idDeck: this.idDeck
					})}
				}>
					<Text style={styles.textWhite}>Restart</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonWhite} onPress={() => {
					this.props.clearScore();
					this.props.navigation.popToTop();
				}}>
					<Text>Back</Text>
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
   },
   buttonBlack: {
	  backgroundColor: 'black',
      padding: 10,
      margin: 15,
      height: 40,
   },
   buttonWhite: {
      backgroundColor: 'white',
      padding: 10,
      margin: 15,
      height: 40,
   },
});

export default connect(mapStateToProps, mapDispatchToProps)(Score);