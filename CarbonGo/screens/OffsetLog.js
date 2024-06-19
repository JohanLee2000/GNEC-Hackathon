import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const OffsetLog = ({ navigation }) => {
    const [counter, setCounter] = useState('');

    const handleLog = () => {
        // Logic to handle logging the counter emissions
        console.log('Logged counter emissions:', counter);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text>Offset Log</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter counter emissions"
                value={counter}
                onChangeText={setCounter}
                keyboardType="numeric"
            />
            <Button title="Log Emissions" onPress={handleLog} />
            <Button title="Close" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        width: '80%',
        padding: 8,
        marginVertical: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
});

export default OffsetLog;