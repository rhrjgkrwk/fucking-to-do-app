import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export default class Todo extends React.Component {
  state = {
    isEditing: false,

  }
  render() {
    return (
      <View>
        <TouchableOpacity>
          <View style={styles.circle} />
          </TouchableOpacity>
        <Text style={styles.text}>Hello I'm a Todo app.</Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container:{
    width: width - 50,
    borderBottomColor: "lightgrey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    marginVertical: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "grey",
  },
});