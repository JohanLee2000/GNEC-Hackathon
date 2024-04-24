// screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      {/* <Button
        title="Go Back to Home"
        onPress={() => navigation.goBack()}
      /> */}
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

export default Profile;
