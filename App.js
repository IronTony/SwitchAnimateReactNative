import React, { Component } from 'react';

import AnimatedSwitch from "./AnimatedSwitch";

import { View, StyleSheet, Text} from 'react-native';      

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ecf0f1',
    alignItems: 'center',
    justifyContent: 'space-around'

  },
  text:{
    fontSize:20,
    color: '#2c3e50',
  }
});
export default class  App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style= {styles.text}>
          Switchs with Animations.
        </Text>
        <Text style={styles.text}>
          @faherrera
        </Text>
        <AnimatedSwitch width={100} activeColor="#3498db" />
        <AnimatedSwitch width={150} activeColor="#3498db" borderRadius/>
        <AnimatedSwitch width={200} activeColor="#e74c3c" />
        <AnimatedSwitch width={250} activeColor={"#2ecc71"} borderRadius/>
        <AnimatedSwitch width={300} activeColor={"#f1c40f"} />
      </View>
    );
  }
}