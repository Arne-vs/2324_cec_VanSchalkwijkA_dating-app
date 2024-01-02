import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import FetchComponent from "../utils/data";

const { width, height } = Dimensions.get("screen");

export default function Profile() {
  const [profileData, setProfileData] = useState(null); // State to hold profile data

  useEffect(() => {
    // Fetch profile data here
    // For example, assuming data fetched from FetchComponent and stored in 'data'
    // Replace this with your actual fetching logic
    const FetchComponent = async () => {
      try {
        const response = await fetch('https://arne.vaw.be/dating_app/api.php');
        const data = await response.json();
        // Assuming 'data' contains profile information, set it to profileData state
        setProfileData(data.users_account); // Assuming 'profile' is the key for profile data
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    FetchComponent(); // Call the function to fetch data when the component mounts
  }, []);

  // Render profile data if available
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF", alignItems: "center" }}>
      <StatusBar hidden={true} />
      {profileData && ( // Check if profileData is available
        <View style={styles.container}>
          <Text style={styles.name}>{profileData.users_first_name}</Text>
          {/* Other profile data rendering */}
          <Text style={styles.bioTitel}>Bio</Text>
          <Text style={styles.bio}>{profileData.bio}</Text>
          {/* Display other profile data as needed */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    margin: 30,
  },
});
