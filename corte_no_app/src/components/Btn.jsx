import React from 'react'
import {TouchableOpacity, StyleSheet, Text} from 'react-native'

const Btn = (props, {onPress}) => {
  return(
    <TouchableOpacity
      style={styles.botao}
     onPress = {onPress}
      >
        <Text style={styles.botaotexto}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  botao: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 30,
    backgroundColor: '#FF5C00',
    borderRadius: 45,
    marginTop: 30,
  },
    botaotexto: {
    fontSize: 18,
    fontWeight: 'bold'
  },
})

export default Btn
