import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { profile as profileArray } from "../utils/data";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ImagePickerExample from "../components/ImageAddButton";

const { width, height } = Dimensions.get("screen");

export default function Profile() {
  const [profile, setProfile] = useState(profileArray);

  useEffect(() => {
    // Reset users data if the array is empty
    if (!profile.length) {
      setProfile(profileArray);
    }
  }, [profile.length]);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF", alignItems: "center" }}>
      <StatusBar hidden={true} />
      {/* Map through users and render Card components */}
      {profile.map(
        ({ name, image, location, distance, fetish, age, bio }, index) => {
          return (
            <ScrollView style={styles.scrollview}>
            <View style={styles.container}>
                
              <Text style={styles.name}>{name}</Text>
              <View style={styles.imageAdd}>
                <Image source={image} style={styles.image} />
                <ImagePickerExample/>
              </View>
              <Text style={styles.bioTitel}>Bio</Text>
              <Text style={styles.bio}>{bio}</Text>
              <View style={styles.fetishAdd}>
                <Text style={styles.fetish}>{fetish}</Text>
                <Text style={styles.fetish}>{fetish}</Text>
              </View>
              
            </View>
            </ScrollView>
          );
        },
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 24,
    marginTop: 64,
  },
  imageAdd: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
  },
  fetishAdd: {
    flexDirection: "row",
    gap: 16,
  },
  name: {
    color: "black",
    fontFamily: "Inter_900Black",
    fontSize: 32,
    marginBottom: 32,
  },
  image: {
    width: width * 0.3,
    height: height * 0.15,
    borderRadius: 16,
    marginBottom: 32,
  },
  bio: {
    fontSize: 16,
    color: "black",
    fontFamily: "Inter_400Regular",
    marginBottom: 32,
  },
  bioTitel: {
    fontSize: 24,
    color: "black",
    fontFamily: "Inter_900Black",
    marginBottom: 8,
  },
  fetish: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "Inter_400Regular",
    backgroundColor: "hotpink",
    width: 100,
    textAlign: "center",
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "hotpink",
    overflow: "hidden",
  },
});
