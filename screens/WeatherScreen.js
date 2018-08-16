import React, { Component } from 'react';
import { StyleSheet, Text, View , ActivityIndicator} from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

const API_KEY = "2d2dd68ea4971e73f010b0be5b978903";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Raining like a MF",
    subtitle: "for more info look outside",
    icon: "ios-rainy",
  },
  Clear: {
    colors: ["yellow", "ivory"],
    title: "Sunny as fuck",
    subtitle: "Go get your ass burnt",
    icon: "ios-sunny",
  },
  Thunderstorm: {
    colors: ["#D7D2CC", "#304352"],
    title: "Thunderstorm in the house",
    subtitle: "Go out and enjoy Thunder",
    icon: "ios-thunderstorm",
  },
  Drizzle: {
    colors: ["#89F7FE", "#8986E5"],
    title: "Drizzle",
    subtitle: "It's like a rain",
    icon: "ios-rainy-outline",
  },
  Mist: {
    colors: ["#89F7FE", "#8986E5"],
    title: "Drizzle",
    subtitle: "It's like a rain",
    icon: "ios-rainy-outline",
  },
  Clouds: {
    colors: ["lightgrey", "grey"],
    title: "Clouds",
    subtitle: "fucking boring",
    icon: "ios-cloudy",
  },
  Snow: {
    colors: ["white", "lightgrey"],
    title: "Cold as balls",
    subtitle: "Do you wanna build a snowman?",
    icon: "ios-snow",
  }
}

export default class WeatherScreen extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
    location: null,
  }

  __getWeather = (lat, lon) => {
    console.log(API_KEY);
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          location: json.name,
          isLoaded: true
        });
      });
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.__getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        console.log(error);
        this.setState({
          error: 'Something went wrong',
        })
      }
    )
  }

  render() {
    const {
      isLoaded,
      error,
      temperature,
      name,
      location
    } = this.state;

    return (
      <View style={styles.container}>
        {isLoaded ? (
          <LinearGradient colors={weatherCases[name].colors} style={styles.container1}>
            <View style={styles.upper}>
              <Ionicons size={144} color="white" name={weatherCases[name].icon} />
              <Text style={styles.temp}>{Math.round(temperature - 273.15)}º</Text>
              <Text style={styles.location}>{location}</Text>
            </View>
            <View style={styles.lower}>
              <Text style={styles.title}>{weatherCases[name].title}</Text>
              <Text style={styles.subtitle}>{weatherCases[name].subtitle}</Text>
            </View>
          </LinearGradient>
        ) : (
            <View style={styles.loading}>
              <ActivityIndicator />
              <Text style={styles.loadingText}>Getting the fucking weather!</Text>
              {error ? <Text>{error}</Text> : null}
            </View>
          )}
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
  },
  temp: {
    fontSize: 45,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24,
  },
  location: {
    fontSize: 25,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24,
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300",
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24,
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100,
  },
}) 