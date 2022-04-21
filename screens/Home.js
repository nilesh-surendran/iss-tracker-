import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Platform, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require('../assets/bg_image.png')} style={styles.backgroundImage}>
                <View
                  style={styles.titleBar}>
                <Text 
                  style={styles.titleText}>ISS Tracker App</Text>
                </View>
                <TouchableOpacity
                  style={styles.routeCard}
                  onPress={()=>this.props.navigation.navigate('ISSLocation')}
                  >
                  <Text style={styles.routeText}>ISS Location</Text>
                  <Text style={styles.knowMore}>{'Know More--->'}</Text>
                  <Text style={styles.digit}>1</Text>
                  <Image source={require('../assets/iss_icon.png')} style={styles.iconImage}/>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.routeCard}
                  onPress={()=>this.props.navigation.navigate('Meteor')}
                  >
                  <Text style={styles.routeText}>Meteors</Text>
                  <Text style={styles.knowMore}>{'Know More--->'}</Text>
                  <Text style={styles.digit}>2</Text>
                  <Image source={require('../assets/meteor_icon.png')} style={styles.iconImage}/>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  droidSafeArea:{
    marginTop:Platform.OS==="android" ? StatusBar.currentHeight:0
  },
  titleBar:{
    flex:0.15,
    justifyContent:"center",
    alignItems:'center'
  },
  titleText:{
    fontSize:40,
    fontWeight:'bold',
    color:'white'
  },
  routeCard:{
    flex:0.25,
    marginLeft:50,
    marginRight:50,
    marginTop:50,
    borderRadius:30,
    backgroundColor:'white'
  },
  routeText:{
    fontSize:30,
    fontWeight:'bold',
    color:'black',
    paddingLeft:30,
    marginTop:50
  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover'
  },
  knowMore:{
    paddingLeft:30,
    color:'red',
    fontSize:15
  },
  digit:{
    position:'absolute',
    fontSize:150,
    right:20,
    bottom:-15,
    zIndex:-1,
    color:'rgba(183,183,183,0.5)'
  },
  iconImage:{
    position:"absolute",
    height:200,
    width:200,
    resizeMode:'contain',
    right:20,
    top:-80,
  }
})