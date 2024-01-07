import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import useData from "../utils/api";




const { width, height } = Dimensions.get("screen");

export default function Profile({ userData }) {
  const [fetishCardWidth, setFetishCardWidth] = useState(100); // Initial width for the card

  // Check if userData exists
  if (!userData) {
    return (
      <View>
        <Text>User not found</Text>
      </View>
    );
  }

  const measureTextWidth = (text) => {
    const textWidth = text.length * 10; // Adjust the factor for text length to width conversion
    setFetishCardWidth(textWidth > 100 ? textWidth : 100); // Set minimum width as 100
  };

  // Render profile data
  return (
    
    <View style={styles.container}>
      <Text style={styles.h1}>{userData.users_first_name} {userData.users_last_name}</Text>
      <Image
  source={{
    uri: `https://arne.vaw.be/dating_app/${userData.photo_link}`,
  }}
  style={styles.photo}
/>
      <Text style={styles.h2}>Bio</Text>
      <Text style={styles.p}>{userData.users_details}</Text>
      <Text style={styles.h2}>My interests</Text>
      <View style={[styles.fetishCard, { width: fetishCardWidth }]}>
        <Text
          style={styles.fetish}
          onLayout={(event) =>
            measureTextWidth(userData.fetish_name)
          }
        >
          {userData.fetish_name}
        </Text>
      </View>

      <Text style={styles.h3}>Looking for</Text>
      <View style={styles.relationship}>
      <Text style={styles.pRelationship}>{userData.relationship_name}</Text>
      </View>

      <Text style={styles.h3}>I would like to see</Text>
      <View style={styles.gender}>
      <Text style={styles.pGender}>{userData.gender_name}</Text>
      </View>
      



  </View>
  );
}



const styles = StyleSheet.create({
  photo: {
   width: 200,
   height: 200,
   marginBottom: 24,
   borderRadius: 8,
  },
  container: {
    marginTop: 56,
    marginLeft: 40
  },
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#F3EFFE",
  },
  h2: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#F3EFFE",
  },
  h3: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#F3EFFE",
  },
  p: {
    fontSize: 16,
    fontWeight: "regular",
    marginBottom: 24,
    color: "#F3EFFE",
  },
  pGender: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F3EFFE",
  },

  pRelationship: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F3EFFE",
  },
  fetish: {
    fontSize: 16,
    color: "#F3EFFE",
    fontWeight: "600",
    textAlign: "center",

  },
  fetishCard: {
    backgroundColor: "#E92c7c",
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E92c7c",
    overflow: "hidden",
    marginBottom: 24,
  },

  gender: {
    width: '90%',
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#262626",
    borderRadius: 8,
    color: "#F3EFFE",
    
  },

  relationship: {
    width: '90%',
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#262626",
    borderRadius: 8,
    color: "#F3EFFE",
    
  },
  
});



