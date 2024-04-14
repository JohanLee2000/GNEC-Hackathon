import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Achievements = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>BOOYAH Achievements</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')} // Make sure you have a DetailsScreen defined to use this
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

export default Achievements;