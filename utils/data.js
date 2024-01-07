export const users = [
  {
    id: 1,
    name: "Luciana Julia",
    location: "Portland illinois",
    distance: 11,
    fetish: "foot fetish",
    age: 23,
    bio: "Love to smell feet",
    text: "you: heyy",
    image: require("../assets/user1.jpg"),
  },
  {
    id: 2,
    name: "William Ida",
    location: "Portland illinois",
    distance: 11,
    fetish: "ear fetish",
    age: 24,
    text: "William Ida: byee",
    bio: "I like to lick your ears",
    image: require("../assets/user2.jpg"),
  },
  {
    id: 3,
    name: "Tracy Fradera",
    location: "Portland illinois",
    distance: 11,
    fetish: "hair fetish",
    text: "you: Want to meet?",
    age: 24,
    bio: "Love to smell hair",
    image: require("../assets/user3.jpg"),
  },
  {
    id: 4,
    name: "Doreatha Grave",
    location: "Portland illinois",
    distance: 11,
    fetish: "hair fetish",
    text: "you: How are you?",
    age: 24,
    bio: "Love to feel washed hair",
    image: require("../assets/user4.jpg"),
  },
  {
    id: 5,
    name: "Jacquetta Bobalik",
    location: "Portland illinois",
    distance: 11,
    fetish: "foot fetish",
    text: "Jacquetta Bobalik: When will we meet?",
    age: 24,
    bio: "Love to smell feet",
    image: require("../assets/user5.jpg"),
  },
  {
    id: 6,
    name: "Velia Kwasniak",
    location: "Portland illinois",
    distance: 11,
    fetish: "foot fetish",
    age: 24,
    text: "you: great you?",
    bio: "Love to smell feet",
    image: require("../assets/user6.jpg"),
  },
  {
    id: 7,
    name: "Karisa Delorm",
    location: "Portland illinois",
    distance: 11,
    fetish: "foot fetish",
    text: "Karisa Delorm: Want to make a song togheter?",
    age: 24,
    bio: "Love to smell feet",
    image: require("../assets/user7.jpg"),
  },
  {
    id: 8,
    name: "Cecil Agudelo",
    location: "Portland illinois",
    distance: 11,
    fetish: "foot fetish",
    text: "Cecil Agudelo: Great thanks",
    age: 24,
    bio: "Love to smell feet",
    image: require("../assets/user8.jpg"),
  },
];

export const usersM = [
  {
    id: 1,
    name: "Luciana Julia",
    location: "Portland illinois",
    distance: 11,
    fetish: "foot fetish",
    age: 23,
    bio: "Love to smell feet",
    text: "you: heyy",
    image: require("../assets/user1.jpg"),
  },
  {
    id: 2,
    name: "William Ida",
    location: "Portland illinois",
    distance: 11,
    fetish: "ear fetish",
    age: 24,
    text: "William Ida: byee",
    bio: "I like to lick your ears",
    image: require("../assets/user2.jpg"),
  },
  {
    id: 3,
    name: "Tracy Fradera",
    location: "Portland illinois",
    distance: 11,
    fetish: "hair fetish",
    text: "you: Want to meet?",
    age: 24,
    bio: "Love to smell hair",
    image: require("../assets/user3.jpg"),
  },
  
];


export const profile = [
  {
    id: 1,
    name: "Kobe Van Dyck",
    location: "Mechelen",
    distance: 11,
    fetish: "Melolagnia",
    age: 19,
    bio: "I make sick beats that I really love, when im having sex or i jerk off i play my music in the background. It makes me cum twice as fast as normal.",
    image: require("../assets/kobe.jpg"),
  },
];

/*
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';

const FetchComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://arne.vaw.be/dating_app/api.php')
      .then(response => response.json())
      .then(json => {
        setData(json.users_account);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <ScrollView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </ScrollView>
    );
  }

  if (error) {
    return (
      <ScrollView style={styles.container}>
        <Text>Error fetching data: {error.message}</Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text>Data from CMS:</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
      <Text>{data.users_first_name}</Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  // Add other styles as needed
});

export default FetchComponent;
*/