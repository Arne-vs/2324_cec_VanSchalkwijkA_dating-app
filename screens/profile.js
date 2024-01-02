import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import useData from "../utils/api";

const { width, height } = Dimensions.get("screen");

export default function Profile() {
  const [userId, setUserId] = useState(null);
  const { userData, isLoading, isError } = useData(userId);

  // Fetch user data when userId changes
  useEffect(() => {
    // You can set userId here based on some logic or user interaction
    // For example, setting it to a specific value
    setUserId(29); // Replace 123 with the desired userId
  }, []);
  

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>Error fetching data...</Text>
      </View>
    );
  }

  // Render profile data if available
  return (
    <View>
    {userData ? (
      <View>
        <Text>User Details:</Text>
        <Text>User ID: {userData.users_id}</Text>
        <Text>Name: {userData.users_first_name}</Text>
        {/* Display other user details */}
      </View>
    ) : (
      <Text>User not found</Text>
    )}
  </View>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 30,
  },
});



