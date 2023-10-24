import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts, Inter_900Black, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';


export default function CreateAccount({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Account</Text>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Home')
        }}>
        <Text style={styles.text}>Create Account button</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Login')
        }}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hotpink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontFamily: 'Inter_900Black',
    paddingTop: 10,
  },
});
