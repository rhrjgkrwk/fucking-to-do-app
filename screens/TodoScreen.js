import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
} from 'react-native';
import { ScrollView } from '../node_modules/react-native-gesture-handler';
import Todo from './Todo';

const { height, width } = Dimensions.get("window");

export default class TodoScreen extends React.Component {

  state = {
    newToDo: ""
  }

  render() {
    const {newToDo} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>To Do</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input} 
            placeholder={"New To Do!"} 
            placeholderTextColor={"#999"}
            value={newToDo} 
            onChangeText={this.__controllNewToDo} 
            returnKeyType={"done"}
          />
          <ScrollView contentContainerStyle={styles.toDos}>
            <Todo/>
          </ScrollView>
        </View>
      </View>
    );
  }


  __controllNewToDo = (text) => {
    this.setState({
      newToDo: text,
    });
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    marginBottom: 30,
    fontWeight: '200',
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50,50,50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0,
        },
      },
      android: {
        elevation: 3,
      }
    }),
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 0.7,
    fontSize: 20,
  }

});
