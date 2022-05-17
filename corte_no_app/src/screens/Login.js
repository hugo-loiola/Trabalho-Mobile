import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
  Animated,
  Keyboard
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Icon from 'react-native-vector-icons/Ionicons';
import MeuInput from "../components/MeuInput";

const schema = yup.object({
  usuario: yup
    .string()
    .required("Email/usuário/telefone obrigatório"),
  senha: yup
    .string()
    .required("Senha obrigatória"),
});

const Login = () => {

  const [logo] = useState(new Animated.ValueXY({x: 200, y: 284}));

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)
  })

  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 80,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 113,
        duration: 100,
        useNativeDriver: false
      })
    ]).start();
  }

  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 200,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 284,
        duration: 100,
        useNativeDriver: false,
      })
    ]).start();
  }

  const [hidePass, setHidePass] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleSingIn(data) {
    Alert.alert(
      "Login concluído",
      "Bem vindo ao Corte no APP! Onde seu estilo, é nossa prioridade.",
      [
        {
          text: "Ver barbearias",
          // On press para ir a LISTAGEM
        },
      ]
    );
    console.log(data);
  }

  return (

    <ImageBackground source={require('../assets/fundo.jpg')} resizeMode="cover" style={styles.container}>

      <KeyboardAvoidingView>

        <ScrollView>

          <Animated.Image
            style={{
              width: logo.x,
              height: logo.y,
              alignSelf: 'center',
              marginTop: 30
              }}
            source={require("../assets/Logo.png")}
          />

          <View style={styles.inputContainer}>
            <TouchableWithoutFeedback>
                <Icon style={styles.icon} name="person-outline" size={20} color="white"/>
            </TouchableWithoutFeedback>
            <Controller
              control={control}
              name="usuario"
              render={({ field: { onChange, value } }) => (

                <MeuInput
                  placeholder='EMAIL, USUÁRIO, TELEFONE'
                  value={value}
                  onChangeText={onChange}
                />

              )}
            />
          </View>

          {errors.usuario && (
            <Text style={styles.textoerror}>{errors.usuario?.message}</Text>
          )}

          <View style={styles.inputContainer}>
            <TouchableWithoutFeedback>
              <Icon style={styles.icon} name="lock-closed-outline" size={20} color="white"/>
            </TouchableWithoutFeedback>
            <Controller
              name="senha"
              control={control}
              render={({ field: { onChange, value } }) => (

                <MeuInput
                  placeholder="SENHA"
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

          <TouchableOpacity
            style={styles.botao1}
            onPress={handleSubmit(handleSingIn)}
          >
            <Text style={styles.botaotexto1}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao2}
            // On press ir para ESQUECI A SENHA
          >
            <Text style={styles.botaotexto2}>ESQUECI A SENHA</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', marginTop: 40, marginHorizontal: 40}}>
            <Text style={styles.textoncadastro}>não tem cadastro?</Text>
            <TouchableOpacity /* onPress para CADASTRAR */>
              <Text style={styles.textoInscrevase}>inscreva-se</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

      </KeyboardAvoidingView>

    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    alignItems: 'center'
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
    marginRight: 10,
  },
  textoncadastro: {
    color: 'white',
    fontVariant: ['small-caps'],
    fontWeight: 'normal',
    fontSize: 16,
    flex: 1,
  },
  textoInscrevase: {
    color: '#FF5C00',
    fontVariant: ['small-caps'],
    fontWeight: 'normal',
    fontSize: 18,
    flex:1
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
  botao2: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#FF5C00',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 20,
    marginTop: 20,
    borderRadius: 45,
  },
  botaotexto1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaotexto2: {
    color: 'white',
    fontSize: 12,
  },
  textoerror: {
    color:'red',
    alignSelf: 'center',
    paddingTop: 3,
  }
});

export default Login;
