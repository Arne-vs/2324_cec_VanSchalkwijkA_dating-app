import Home from './screens/home';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './screens/profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Messages from './screens/messages';
import CreateAccount from './screens/createAccount';
import Login from './screens/login';
import { useFonts, Inter_900Black, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
    Inter_400Regular,
    Inter_600SemiBold,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  
  return (
    <NavigationContainer>
       <Tab.Navigator
 
 screenOptions={({ route }) => ({

   tabBarIcon: ({ focused, color, size }) => {
     let iconName;

     if (route.name === 'Home') {
       iconName = focused ? 'home' : 'home-outline';
     } 
     else if (route.name === 'Profile') {
       iconName = focused ? 'person-circle' : 'person-circle';
     }
     else if (route.name === 'Messages') {
      iconName = focused ? 'chatbox' : 'chatbox';
    }
     return <Ionicons name={iconName} size={size} color={color} />;
   },
 })}

 tabBarOptions={{
   activeTintColor: 'hotpink',
   inactiveTintColor: 'gray',
 }}
  >
        <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Messages" component={Messages} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
