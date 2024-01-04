import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("screen");
import { Fragment, useCallback } from "react";
import Choice from "./Choice";

  const Card = ({
    name,
    age,
    bio,
    fetish,
    location,
    distance,
    image,
    isFirst,
    swipe,
    titlSign,
    ...rest
}) => {
  // Calculate the rotation of the card based on swipe gesture
  const rotate = Animated.multiply(swipe.x, titlSign).interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ["8deg", "0deg", "-8deg"],
  });

  // Animated style for the card with rotation and translation
  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate }],
  };

  // Opacity animation for the "like" button
  const likeOpacity = swipe.x.interpolate({
    inputRange: [25, 100],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  // Opacity animation for the "nope" button
  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-100, -25],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  // Function to render the "like" and "nope" buttons conditionally
  const renderChoice = useCallback(() => {
    return (
      <Fragment>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.likeContainer,
            { opacity: likeOpacity },
          ]}
        >
          <Choice type="like" />
        </Animated.View>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.nopeContainer,
            { opacity: nopeOpacity },
          ]}
        >
          <Choice type="nope" />
        </Animated.View>
      </Fragment>
    );
  }, [likeOpacity, nopeOpacity]);

  return (
    <Animated.View
      style={[styles.container, isFirst && animatedCardStyle]}
      {...rest}
    >
      <Image source={image} style={styles.image} />
      <LinearGradient
        colors={["transparent", "#161616"]}
        style={styles.gradient}
      />
      <View style={styles.userContainer}>
        <Text style={styles.name}>
          {name}, {age}{" "}
        </Text>
        <Text style={styles.bio}>{bio}</Text>
        <Text style={styles.fetish}>{fetish}</Text>

      </View>
      {isFirst && renderChoice()}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 70,
  },
  image: {
    width: width * 0.9,
    height: height * 0.7,
    borderRadius: 20,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    borderRadius: 20,
  },
  userContainer: {
    position: "absolute",
    bottom: 24,
    left: 24,
  },
  name: {
    fontSize: 30,
    color: "#F3EFFE",
    fontWeight: "600",
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: "#F3EFFE",
    fontWeight: "400",
  },
  fetish: {
    marginTop: 10,
    fontSize: 16,
    color: "#F3EFFE",
    fontWeight: "600",
    backgroundColor: "#E92c7c",
    width: 100,
    textAlign: "center",
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E92c7c",
    overflow: "hidden",
  },
  choiceContainer: {
    position: "absolute",
    top: 100,
  },
  likeContainer: {
    left: 45,
    transform: [{ rotate: "-30deg" }],
  },
  nopeContainer: {
    right: 45,
    transform: [{ rotate: "30deg" }],
  },
});

export default Card;
