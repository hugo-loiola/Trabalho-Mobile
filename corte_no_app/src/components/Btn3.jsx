import React from 'react'
import {TouchableOpacity, StyleSheet, Text} from 'react-native'

const Btn3 = ({onPress , texto, texto2}) => {
  return(
    <TouchableOpacity onPress={onPress} style={styles.textoncadastro}>
      <Text style={styles.textoncadastro}>
        {texto}   
          <Text style={{color: '#FF5C00'}}>{texto2}</Text>
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textoncadastro: {
    color: 'white',
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    marginTop: 50,
  },

})

export default Btn3
