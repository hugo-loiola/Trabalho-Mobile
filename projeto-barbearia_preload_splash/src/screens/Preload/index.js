import React from 'react';
import { Text, View,ImageBackground, Image, StyleSheet, ActivityIndicator } from 'react-native';



export default function Preload() {


  return (
    <>
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fundo.jpg')} style={styles.imageBackground}>
        <Image source={require('../../assets/maquina.png')} style={styles.imageForeground} />
        <ActivityIndicator size="large" color="#FF5C00" style={styles.activityindicator} />
      </ImageBackground>
      <View style={styles.textview}>
      <Text style={styles.textend}>Corte no APP</Text>
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column-reverse",
    
  },
  imageBackground: {
    flexGrow: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    
  },
  imageForeground: {
    width: 320,
    height: 160,
    justifyContent: "flex-end",
    alignItems: "center",
    
  },
  textend: {
    color: "#FF5C00",
    alignSelf: "center",
    marginBottom: 20,
    fontSize: 12,
    fontWeight: "bold"
  },
  textview: {
    position: 'absolute',
    alignSelf: "center",
    
  },
  activityindicator: {
    alignSelf: "center",
    color: "#FF5C00",
    paddingTop: 50
    
  }
})