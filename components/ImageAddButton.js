import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const { width, height } = Dimensions.get("screen");

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{flexDirection: 'row', gap: 16,}}>
      {image && <Image source={{ uri: image }} style={{ width: 150, height: 150, borderRadius: 16,}} />}
      <View style={{ width: 150, height: 150, borderRadius: 16, backgroundColor: 'lightgrey', justifyContent: 'center',}}>
      <Button title="Add photo" onPress={pickImage} color="black" />
      </View>
    </View>
  );
}