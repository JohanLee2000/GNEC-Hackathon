import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import favicon from '../assets/favicon.png';

const ProfileHeader = ({ navigation }) => {
	return(
		<View style={styles.container}>
		<View style={styles.leftContent}>
			{/* Other header content can go here */}
		</View>
		<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
			<Image
			source={favicon}
			style={styles.profileButton}
			/>
		</TouchableOpacity>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	  alignItems: 'center',
	  padding: 10,
	  backgroundColor: '#fff', // Change background color as needed
	},
	profileButton: {
	  width: 40,
	  height: 40,
	  borderRadius: 20, // Half of width and height to make it circular
	  borderWidth: 2,
	  borderColor: '#fff', // Optional, for white border around the image
	},
	leftContent: {
	  // Styles for the left part of the header
	}
  });

export default ProfileHeader;