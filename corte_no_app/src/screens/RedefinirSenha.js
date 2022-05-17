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
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Icon from 'react-native-vector-icons/Ionicons';
import MeuInput from "../components/MeuInput"


const schema = yup.object({
  senha: yup
    .string()
    .min(8, ({ min }) => `Senha deve conter no mínimo ${min} caracteres`)
    .matches(/\w*[a-z]\w*/, 'Senha deve conter letra minúscula')
    .matches(/\w*[A-Z]\w*/,  'Senha deve conter letra maiúscula')
    .matches(/\d/, 'Senha deve conter numeral')
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Senha deve conter caracter especial')
    .required('Senha obrigatória'),
  confirmarSenha: yup
    .string()
    .oneOf([yup.ref('senha'), null], 'Confirmação não similar a senha')
    .required('Confirmação de senha obrigatória'),
});

const RedefinirSenha = () => {

  const [hidePass, setHidePass] = useState(true);
  const [hidePass1, setHidePass1] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleSingIn(data) {
    Alert.alert(
      "Senha redefinida",
      "A nova senha foi cadastrada com sucesso! Volte para efetuar o login.",
      [
        {
          text: "Voltar ao login",
          // On press para ir ao LOGIN
        },
      ]
    );
    console.log(data);
  }

  return (

    <ImageBackground source={require('../assets/fundo.jpg')} resizeMode="cover" style={styles.container}>

      <KeyboardAvoidingView>

        <ScrollView>

          <Text style={styles.textoInformacao}>redefina sua senha</Text>

          <ImageBackground source={require('../assets/chave.png')} resizeMode="cover" style={styles.chaveImage} imageStyle= 
{{opacity:0.5}}>
            <View style={styles.inputContainer}>
            <TouchableWithoutFeedback>
              <Icon style={styles.icon} name="lock-closed-outline" size={20} color="white"/>
            </TouchableWithoutFeedback>
            <Controller
              name="senha"
              control={control}
              render={({ field: { onChange, value } }) => (

                <MeuInput
                  placeholder="NOVA SENHA"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={hidePass}
                />

              )}
            />
            <TouchableWithoutFeedback onPress={() => setHidePass(!hidePass)}>
              { hidePass ?
                <Icon style={styles.iconHide} name="eye-outline" size={20} color="white"/>
                :
                <Icon style={styles.iconHide} name="eye-off-outline" size={20} color="white"/>
              }
            </TouchableWithoutFeedback>
          </View>

          {errors.senha && (
            <Text style={styles.textoerror}>{errors.senha?.message}</Text>
          )}

          <View style={styles.inputContainer}>
            <TouchableWithoutFeedback>
              <Icon style={styles.icon} name="lock-closed-outline" size={20} color="white"/>
            </TouchableWithoutFeedback>
            <Controller
              name="confirmarSenha"
              control={control}
              render={({ field: { onChange, value } }) => (

                <MeuInput
                  placeholder="CONFIRMAR NOVA SENHA"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={hidePass1}
                />

              )}
            />
            <TouchableWithoutFeedback onPress={() => setHidePass1(!hidePass1)}>
              { hidePass1 ?
                <Icon style={styles.iconHide} name="eye-outline" size={20} color="white"/>
                :
                <Icon style={styles.iconHide} name="eye-off-outline" size={20} color="white"/>
              }
            </TouchableWithoutFeedback>
          </View>

          {errors.confirmarSenha && (
            <Text style={styles.textoerror}>{errors.confirmarSenha?.message}</Text>
          )}

          </ImageBackground>

          <TouchableOpacity
            // On press, handleSignIN
            style={styles.botao1}
            onPress={handleSubmit(handleSubmit(handleSingIn))}
          >
            <Text style={styles.botaotexto1}>REDEFINIR</Text>
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
  chaveImage: {
    height: 300,
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
  iconHide: {
    alignSelf: 'center',
    marginLeft: 10,
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
  }
});

export default RedefinirSenha;
