import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Profile from '../screens/profile';

const LoginScreen = ({ onLogin, setIsLoggedIn, setUserData}) => {
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
        console.log(data);
        console.log(data.users_account)


// Export the value

        const sanitizedUserData = sanitizeUserData(data.user_data, data.relationships, data.fetish, data.photo, data.gender); // Remove circular references and include relationships
 // Remove circular references
  
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
  const sanitizeUserData = (userData, relationsData, fetishData, photoData, genderData) => {

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
      relationship_name: relationsData[0],
      fetish_name: fetishData[0],
      photo_link: photoData[0],
      gender_name: genderData[0],
    };
    return sanitizedData;
  };

  
  
  return (
    <View style={styles.container}>
      <Text>{error}</Text>
      
      <View style={styles.title}>
      <Text style={styles.titleName}>Naam</Text>
      <Text style={styles.h1}>Login</Text>
      </View>
      
      <TextInput
        style={styles.fillIn}
        placeholder="Username"
        placeholderTextColor="#F3EFFE"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.fillIn}
        placeholderTextColor="#F3EFFE"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity  style={styles.button} onPress={() => handleLogin(username, password)}>
        <Text style={styles.buttonT}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#F3EFFE",
  },
  titleName: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#F3EFFE",
    marginTop: 56
  },
  container: {
    flex: 1,
    backgroundColor: "#161616",
    alignItems: "center",
  },
  title: {
    width: '80%',
  },

  button: {
    width: '80%',
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#E92c7c",
    borderRadius: 8,
  },

  buttonT: {
   textAlign: "center",
   fontWeight: "bold",
   color: "#F3EFFE",
  },

  fillIn: {
    width: '80%',
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#262626",
    borderRadius: 8,
    color: "#F3EFFE",
    
  },
});


export default LoginScreen;
