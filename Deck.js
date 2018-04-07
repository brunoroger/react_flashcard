import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Deck extends React.Component {
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.box}>
					<Text style={styles.title}>udacicards</Text>
					<Text style={styles.subTitle}>3 cards</Text>
				</View>
				<View style={styles.box}>
					<Text style={styles.title}>New Deck</Text>
					<Text style={styles.subTitle}>0 cards</Text>
				</View>
				<View style={styles.box}>
					<Text style={styles.title}>New Deck 2</Text>
					<Text style={styles.subTitle}>0 cards</Text>
				</View>
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