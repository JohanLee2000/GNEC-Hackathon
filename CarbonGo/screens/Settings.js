import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Settings = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
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

export default Settings;