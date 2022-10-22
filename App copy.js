import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import { Component } from "react/cjs/react.production.min";
import foto from './programmer.jpg';
import { style } from "./style";

const App = () => {
  return (
    <View style={ style.container }>
    {/* <Teks />
    <Text style={ style.tulisanku }>Selamat Datang</Text>
    <Image source={{ uri: 'http://placeimg.com/100/100/tech' }} style={{ width:100, height:100 }}></Image>
    <TextInput style={{ borderWidth:1 }}/>
    <Photo />
    <Tampilan />
    <Tulisan />
    <Photoku /> */}
      <View style={ style.bagian1 }>
        <View style={ style.bagian11 }></View>
        <View style={ style.bagian12 }></View>
        <View style={ style.bagian11 }></View>
        <View style={ style.bagian11 }></View>
        <View style={ style.bagian11 }></View>
      </View>
      <View style={ style.bagian2 }></View>
      <View style={ style.bagian1 }>
        <View style={ style.bagian11 }></View>
        <View style={ style.bagian12 }>
          <TextInput style={{ backgroundColor:'white' }}/>
        </View>
        <View style={ style.bagian11 }></View>
      </View>
    </View>
  );
}

const Teks = () => {
  return (
    <Text style={ style.tulisanku }>Hello World...</Text>
  )
}

const Photo = () => {
  return (
    <Image source={ foto } style={{ width:200, height:200 }}></Image>
  )
}
const Tampilan = () => {
  return (
    <View style={{ width:100, height:100, backgroundColor:'blue' }}/>
  )
}

class Tulisan extends Component {
  render () {
    return (
      <Text>Tampilan dari Komponen Class</Text>
    )
  }
}

class Photoku extends Component {
  render () {
    return (
      <Image source={{ uri: 'http://placeimg.com/100/100/arch' }} style={{ width:200, height:200 }}></Image>
    )
  }
}

export default App;