import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default class Deck extends React.Component {
	render(){
		return(
			<View style={styles.container}>
				<TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate('DeckDetails')}>
					<Text style={styles.title}>udacicards</Text>
					<Text style={styles.subTitle}>3 cards</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate('DeckDetails')}>
					<Text style={styles.title}>New Deck</Text>
					<Text style={styles.subTitle}>0 cards</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate('DeckDetails')}>
					<Text style={styles.title}>New Deck 2</Text>
					<Text style={styles.subTitle}>0 cards</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	alignItems: 'stretch'
  },
  box: {
    height: 160,
    backgroundColor: 'white',
	borderBottomColor: '#47315a',
	borderBottomWidth: 1,
	justifyContent: 'center',
	alignItems: 'center'
  },
  title: {
	fontSize: 30
  },
  subTitle: {
	color: 'gray'
  }
});