import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const MeuInput = ({
  value,
  keyboardType,
  placeholder,
  onChangeText,
  secureTextEntry,
  maxLength,
}) => {
  return (

    <TextInput
      value={value}
      keyboardType={keyboardType}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#DCDCDC"
      autoCorrect={false}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      maxLength={maxLength}
    />

  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    color: 'white',
    width: 240
  },

});

export default MeuInput;