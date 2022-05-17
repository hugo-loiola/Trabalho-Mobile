import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
  Alert,
  Picker,
  KeyboardAvoidingView,
  Animated,
  Keyboard,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import MeuInput from "../components/MeuInput";


const schema = yup.object({
  nome: yup
    .string()
    .required('Nome obrigatório'),
  telefone: yup
    .string()
    .min(11, ({ min }) => `Telefone deve conter no mínimo ${min} caracteres`)
    .max(15, ({ max }) => `Telefone deve conter no máximo ${max} caracteres`)
    .required('Teleone obrigatório'),
  email: yup
    .string()
    .email('Coloque um email válido')
    .required('Email é obrigatório'),
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
  perguntaSecreta: yup
    .string()
    .required('Pergunta secreta deve ser respondida'),
});

const Cadastro = () => {

  const [logo] = useState(new Animated.ValueXY({x: 150, y: 213}));

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
        toValue: 150,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 213,
        duration: 100,
        useNativeDriver: false,
      })
    ]).start();
  }  

  const [selectedValue, setSelectedValue] = useState("pergunta1");

  const [hidePass, setHidePass] = useState(true);
  const [hidePass1, setHidePass1] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleSingIn(data) {
    Alert.alert(
      "Cadastrado",
      "Usuário cadastrado com sucesso! Volte para efetuar o login.",
      [
        {
          text: "Voltar ao login",
          // On press para voltar ao LOGIN
        },
      ]
    );
    console.log(data);
  }

  return (

    <ImageBackground source={require('../assets/fundo.jpg')} resizeMode="cover" style={styles.container}>

      <KeyboardAvoidingView>

        <ScrollView>

          <View style={{paddingTop: 30}}>
            <Animated.Image
              style={{
                width: logo.x,
                height: logo.y,
                alignSelf: 'center',
                }}
              source={require("../assets/Logo.png")}
            />
          </View>
          <View style={styles.inputContainer}>
            <TouchableWithoutFeedback>
                <Ionicons style={styles.icon} name="person-outline" size={20} color="white"/>
            </TouchableWithoutFeedback>
            <Controller
              control={control}
              name="nome"
              render={({ field: { onChange, value } }) => (

                <MeuInput
                  placeholder='NOME COMPLETO'
                  value={value}
                  onChangeText={onChange}
                />

              )}
            />
          </View>

          {errors.nome && (
            <Text style={styles.textoerror}>{errors.nome?.message}</Text>
          )}

          <View style={styles.inputContainer}>
            <TouchableWithoutFeedback>
                <Ionicons style={styles.icon} name="at-outline" size={20} color="white"/>
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

          <View style={styles.inputContainer}>
            <TouchableWithoutFeedback>
                <Ionicons style={styles.icon} name="call-outline" size={20} color="white"/>
            </TouchableWithoutFeedback>
            <Controller
              control={control}
              name="telefone"
              render={({ field: { onChange, value } }) => (

                <MeuInput
                  placeholder='TELEFONE'
                  value={value}
                  onChangeText={onChange}
                  keyboardType='phone-pad'
                  maxLength={15}
                />

              )}
            />
          </View>

          {errors.telefone && (
            <Text style={styles.textoerror}>{errors.telefone?.message}</Text>
          )}

          <View style={styles.inputContainer}>
            <TouchableWithoutFeedback>
              <Ionicons style={styles.icon} name="lock-closed-outline" size={20} color="white"/>
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
                <Ionicons style={styles.iconHide} name="eye-outline" size={20} color="white"/>
                :
                <Ionicons style={styles.iconHide} name="eye-off-outline" size={20} color="white"/>
              }
            </TouchableWithoutFeedback>
          </View>

          {errors.senha && (
            <Text style={styles.textoerror}>{errors.senha?.message}</Text>
          )}

          <View style={styles.inputContainer}>
            <TouchableWithoutFeedback>
              <Ionicons style={styles.icon} name="lock-closed-outline" size={20} color="white"/>
            </TouchableWithoutFeedback>
            <Controller
              name="confirmarSenha"
              control={control}
              render={({ field: { onChange, value } }) => (

                <MeuInput
                  placeholder="CONFIRMAR SENHA"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={hidePass1}
                />

              )}
            />
            <TouchableWithoutFeedback onPress={() => setHidePass1(!hidePass1)}>
              { hidePass1 ?
                <Ionicons style={styles.iconHide} name="eye-outline" size={20} color="white"/>
                :
                <Ionicons style={styles.iconHide} name="eye-off-outline" size={20} color="white"/>
              }
            </TouchableWithoutFeedback>
          </View>

          {errors.confirmarSenha && (
            <Text style={styles.textoerror}>{errors.confirmarSenha?.message}</Text>
          )}  

          <View style={styles.selectContainer}>
            <View style={{flexDirection: 'row'}}>
              <TouchableWithoutFeedback>
                <MaterialCommunityIcons style={styles.icon} name="help-circle-outline" size={20} color="white"/>
              </TouchableWithoutFeedback>
              <Text style={styles.textoSelect}>PERGUNTA SECRETA</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Picker
                selectedValue={selectedValue}
                style={styles.select}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Qual o nome de solteira de sua mãe?" value="pergunta1" />
                <Picker.Item label="Qual o nome de seu primeiro animal de estimação?" value="pergunta2" />
                <Picker.Item label="Qual o nome de sua primeira escola?" value="pergunta3" />
                <Picker.Item label="Em que ano foi seu primeiro beijo?" value="pergunta4" />
              </Picker>
              <TouchableWithoutFeedback>
                <Ionicons style={styles.icon} name="ios-chevron-down" size={20} color="white"/>
              </TouchableWithoutFeedback>
            </View>   

            <View style={{flexDirection: 'row'}}>

              <Controller
                name="perguntaSecreta"
                control={control}
                render={({ field: { onChange, value } }) => (

                  <MeuInput
                    placeholder="RESPOSTA"
                    value={value}
                    onChangeText={onChange}
                  />

                )}
              />
            </View>
          </View>
          
          {errors.perguntaSecreta && (
            <Text style={styles.textoerror}>{errors.perguntaSecreta?.message}</Text>
          )}   

          <TouchableOpacity
            style={styles.botao1}
            onPress={handleSubmit(handleSingIn)}
          >
            <Text style={styles.botaotexto1}>CADASTRAR</Text>
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
  },
  inputContainer: {
    borderColor: '#FF5C00',
    borderWidth: 1,
    paddingLeft: 10,
    marginTop: 15,
    borderRadius: 45,
    flexDirection: 'row',
  },
  selectContainer: {
    borderColor: '#FF5C00',
    borderWidth: 1,
    paddingLeft: 10,
    marginTop: 15,
    borderRadius: 20,
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
  select: {
    color: '#DCDCDC',
    backgroundColor: 'transparent',
    borderRadius: 45,
    width: 285,
    fontSize: 14,
  },
  textoSelect: {
    padding: 10,
    color: '#DCDCDC',
    width: 240
  },
});

export default Cadastro;
