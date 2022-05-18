import React, { Component } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Text, Animated, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class MeuFab extends Component {

  animation = new Animated.Value(0)

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1
    Animated.spring(this.animation, {
      toValue,
      friction: 6,
    }).start();

    this.open = !this.open;

  }

  render(){

    function alerta() {
    Alert.alert(
      "Sair?",
      "Tem certeza que deseja sair?",
      [
        {
          text: "Cancelar",
        },
        {
          text: "Sair",
          // On press para desfazer o login
        },
      ]
    );
  }

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })
        }
      ]
    }

    const sairStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -60]
          })
        }
      ]
    }

    const perfilStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -120]
          }) 
        }
      ]
    }

    return(
      <View style={styles.container}>

        <TouchableWithoutFeedback /*On press para ver PERFIL*/>
          <Animated.View style={[styles.button, styles.submenu1, perfilStyle]}>
            <Ionicons name='person-circle-outline' size={22} color ='white' />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={alerta} >
          <Animated.View style={[styles.button, styles.submenu, sairStyle]}>
            <Ionicons name='log-out-outline' size={22} color ='red' />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, styles.menu, rotation]}>
            <Ionicons name='person' size={26} color ='black' />
          </Animated.View>
        </TouchableWithoutFeedback>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    position: 'absolute',
    marginRight: 40,
    marginBottom: 80,
    right: 0,
    bottom: 0,
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60/2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10,
    }
  },
  menu: {
    backgroundColor: '#FF5C00'
  },
  submenu: {
    width: 48,
    height: 48,
    borderRadius: 48/2,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'red',
  },
  submenu1: {
    width: 48,
    height: 48,
    borderRadius: 48/2,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'white',
  },
})
