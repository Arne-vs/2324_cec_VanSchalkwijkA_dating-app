import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import useData from "../utils/api";
import { exportedRelationshipName } from "../components/login";




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

  // Render profile data
  return (
    
    <View style={styles.container}>
      <Text style={styles.h1}>{userData.users_first_name} {userData.users_last_name}</Text>
      <Text style={styles.h2}>Bio</Text>
      <Text style={styles.p}>{userData.users_details}</Text>
      <Text style={styles.p}>{exportedRelationshipName}</Text>
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
    color: "#F3EFFE",
  },
  h2: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#F3EFFE",
  },
  p: {
    fontSize: 16,
    fontWeight: "regular",
    marginBottom: 8,
    color: "#F3EFFE",
  },
});



