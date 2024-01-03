import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./screens/home";
import Profile from "./screens/profile";
import Messages from "./screens/messages";
import LoginScreen from "./components/login";
import useData from "./utils/data";
import allUserData from "./utils/data";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);


  const handleLogin = (loggedInUsername) => {
    setUsername(loggedInUsername);
    setIsLoggedIn(true);
    setUserData(sanitizedUserData);
  };

  const handleLogout = () => {
    setUsername('');
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <LoginScreen onLogin={handleLogin} setIsLoggedIn={setIsLoggedIn} setUserData={setUserData}/>
      ) : (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "person-circle" : "person-circle";
              } else if (route.name === "Messages") {
                iconName = focused ? "chatbox" : "chatbox";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "hotpink",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Profile"
            children={() => <Profile userData={userData} />}
            options={{ headerShown: false }}
          />

          <Tab.Screen
            name="Messages"
            component={Messages}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
