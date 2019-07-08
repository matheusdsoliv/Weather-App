import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  KeyboardAvoidingView,
  ImageBackground
} from "react-native";

import getImageForWeather from "./utils/getImageForWeather";
import SearchInput from "./components/SearchInput";

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      location: "Natal"
    };
  }

  handleUpdateLocation = newLocation => {
    this.setState({
      location: newLocation
    });
  };

  render() {
    const { location } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={getImageForWeather("Snow")}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailsContainer}>
            <Text style={[styles.textStyle, styles.sizeBig]}>{location}</Text>
            <Text style={[styles.textStyle, styles.sizeSmall]}>
              Weather condition
            </Text>
            <Text style={[styles.textStyle, styles.sizeBig]}>Temperature</Text>
            <SearchInput
              placeholder="Search any city"
              onSubmit={this.handleUpdateLocation}
            />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  imageContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.15)"
  },
  textStyle: {
    textAlign: "center",
    color: "white",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto"
  },
  sizeSmall: {
    fontSize: 20
  },
  sizeBig: {
    fontSize: 45
  }
});
