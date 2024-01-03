import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import useData from "../utils/api";

const { width, height } = Dimensions.get("screen");

export default function Profile({ userData }) {

  // Check if userData exists
  if (!userData) {
    return (
      <View>
        <Text>User not found</Text>
      </View>
    );
  }
console.log(userData.relationship_type);
  // Render profile data
  return (
    
    <View style={styles.container}>
      <Text style={styles.h1}>{userData.users_first_name}</Text>
      <Image source={{uri: userData.photo_link}} style={{width: 120, height: 120}} />
      <Text style={styles.h2}>Bio</Text>
      <Text style={styles.p}>{userData.users_details}</Text>

      {/* Display other user details */}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    marginTop: 56,
    marginLeft: 40
  },
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  h2: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  p: {
    fontSize: 16,
    fontWeight: "regular",
    marginBottom: 8,
  },
});



