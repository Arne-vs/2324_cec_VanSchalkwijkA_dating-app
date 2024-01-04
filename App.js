import React, { useState } from 'react';
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
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
  const [relationsData, setRelationsData] = useState(null);


  const handleLogin = (loggedInUsername) => {
    setUsername(loggedInUsername);
    setIsLoggedIn(true);
    const { userData } = useData(username, password);
    setUserData(userData);
    setRelationsData(relationsData);
    // You can now use the `relationships` data in your app...
  };
  

  const handleLogout = () => {
    setUsername('');
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer theme={DarkTheme}>
      {!isLoggedIn ? (
        <LoginScreen onLogin={handleLogin} setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} setRelationsData={setRelationsData}/>
      ) : (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#E92c7c",
            tabBarInactiveTintColor: "#F3EFFE",
            tabBarStyle: { padding: 4, height: 88 },
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
        >
        
        <Tab.Screen
            name="Profile"
            children={() => <Profile userData={userData} relationsData={relationsData}/>}
            options={{ headerShown: false }}
          />

            <Tab.Screen
            name="Home"
            component={Home}
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