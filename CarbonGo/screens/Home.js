import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')} // Make sure you have a DetailsScreen defined to use this
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;