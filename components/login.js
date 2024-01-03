import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const LoginScreen = ({ onLogin, setIsLoggedIn, setUserData }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('https://arne.vaw.be/dating_app/api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ users_username: username, users_password: password }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        const sanitizedUserData = sanitizeUserData(data.user_data); // Remove circular references
  
        setIsLoggedIn(true);
        setUserData(sanitizedUserData);
        // ... Other necessary state updates or redirection to logged-in screens
      } else {
        // Handle login failure
        console.error('Login failed:', data.message);
        // ... Handle error state or show an alert to the user
      }
    } catch (error) {
      console.error('Error during login:', error);
      // ... Handle error state or show an alert to the user
    }
  };
  
  // Function to sanitize user data and remove circular references
  const sanitizeUserData = (userData) => {
    // Implement logic to remove circular references
    // For example, you might create a sanitized object with only necessary properties
    const sanitizedData = {
      users_id: userData.users_id,
      users_first_name: userData.users_first_name,
      users_last_name: userData.users_last_name,
      users_details: userData.users_details,
      users_email: userData.users_email,
      users_username: userData.users_username,
      users_password: userData.users_password,
      users_date_of_birth: userData.users_date_of_birth,
      photo_link: userData.photo_link,
    };
    return sanitizedData;
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
      <Button title="Login" onPress={() => handleLogin(username, password)} />
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
