import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://arne.vaw.be/dating_app/api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `users_username=${encodeURIComponent(username)}&users_password=${encodeURIComponent(password)}`,
      });

      if (response.ok) {
        const userData = await response.json();
        // Check if the response contains 'users_account' data to ensure successful login
        if (userData && userData.users_account && userData.users_account.length > 0) {
          const loggedInUser = userData.users_account[0]; // Assuming the first user in the array
          onLogin(loggedInUser); // Pass user data to indicate successful login
        } else {
          setError('Invalid credentials');
        }
      } else {
        setError('Error occurred during login');
      }
    } catch (error) {
      setError('Error occurred during login');
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{error}</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontFamily: "Inter_900Black",
    paddingTop: 10,
  },
});

export default LoginScreen;
