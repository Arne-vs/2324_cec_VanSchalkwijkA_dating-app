import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image, ScrollView, TouchableOpacity} from 'react-native';
import { users, usersM } from '../utils/data';

const Messages = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.container}>
        <Text style={styles.h1}>
          New Matches
        </Text>
        <ScrollView horizontal={true} style={styles.scrollview}>
          {users.map(user => (
            <View style={styles.user} key={user.id}>
              <Image source={user.image} style={styles.image} />
            </View>
          ))}
        </ScrollView>
        <Text style={styles.h1}>
          Chats
        </Text>
        <View>
          {usersM.map(user => (
            <TouchableOpacity style={styles.chat} key={user.id}>
              <Image source={user.image} style={styles.imageC} />
              <View>
              <Text style={styles.h2}>{user.name}</Text>
              <Text style={styles.p}>{user.text}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#F3EFFE",
  },
  scrollview: {
    marginBottom: 24,
    
  },
  root: {
    width: '100%',
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 24,
  },
  users: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  user: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,

    borderWidth: 2,
    padding: 3,
    borderColor: '#F63A6E',
  },
  chat: {
    flexDirection: 'row',
    gap: 24,
    width: "100%", 
    marginBottom: 24,
    borderRadius: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  imageC: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  h2: {
    fontSize: 24,
    fontWeight: "600",
    color: "#F3EFFE",
  },
  p: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: "regular",
    color: "#F3EFFE",
  },
});

export default Messages;
