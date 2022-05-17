import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Icon from 'react-native-vector-icons/Ionicons';
import MeuInput from "../components/MeuInput"


const schema = yup.object({
  email: yup
    .string()
    .email('Coloque um email válido')
    .required('Email é obrigatório'),
});

const EsqueciSenha = () => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleSingIn(data) {
    console.log(data);
    // On press para ir a PERGUNTA SECRETA
  }

  return (

    <ImageBackground source={require('../assets/fundo.jpg')} resizeMode="cover" style={styles.container}>

      <KeyboardAvoidingView>

        <ScrollView>

          <Text style={styles.textoInformacao}>informe e-mail cadastrado</Text>

          <View style={styles.inputContainer}>
            <TouchableWithoutFeedback>
                <Icon style={styles.icon} name="at-outline" size={20} color="white"/>
            </TouchableWithoutFeedback>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (

                <MeuInput
                  placeholder='EMAIL'
                  value={value}
                  onChangeText={onChange}
                  keyboardType='email-address'
                />

              )}
            />  
          </View>

          {errors.email && (
            <Text style={styles.textoerror}>{errors.email?.message}</Text>
          )}

          <TouchableOpacity
            style={styles.botao1}
            onPress={handleSubmit(handleSubmit(handleSingIn))}
          >
            <Text style={styles.botaotexto1}>CONTINUAR</Text>
          </TouchableOpacity>

        </ScrollView>

      </KeyboardAvoidingView>

    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  inputContainer: {
    borderColor: '#FF5C00',
    borderWidth: 1,
    paddingLeft: 10,
    marginTop: 15,
    borderRadius: 45,
    flexDirection: 'row',
  },
  icon: {
    alignSelf: 'center',
  },
  botao1: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 30,
    backgroundColor: '#FF5C00',
    borderRadius: 45,
    marginTop: 30,
  },
  botaotexto1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textoerror: {
    color:'red',
    alignSelf: 'center',
    paddingTop: 3,
  },
  textoInformacao: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontVariant: ['small-caps'],
    fontWeight: 'normal',
    marginBottom: 20,
  }
});

export default EsqueciSenha;
