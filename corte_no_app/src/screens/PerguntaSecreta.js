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
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import MeuInput from "../components/MeuInput";


const schema = yup.object({
  perguntaSecreta: yup
    .string()
    .required('Pergunta secreta deve ser respondida'),
});

const PerguntaSecreta = () => {

  const [selectedValue, setSelectedValue] = useState("pergunta1");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleSingIn(data) {
    Alert.alert(
      "Usuário autentificado",
      "Autentificação concluída com sucesso! Avance para redefinir nova senha.",
      [
        {
          text: "Redefinir nova senha",
          // On press para ir a REDEFINIR NOVA SENHA
        },
      ]
    );
    console.log(data);
  }

  return (

    <ImageBackground source={require('../assets/fundo.jpg')} resizeMode="cover" style={styles.container}>

      <KeyboardAvoidingView>

        <ScrollView>

          <Text style={styles.textoInformacao}>responda a pergunta secreta para autentificar usuário</Text>

          <View style={styles.selectContainer}>
            <View style={{flexDirection: 'row'}}>
              <TouchableWithoutFeedback>
                <MaterialCommunityIcons style={styles.icon} name="help-circle-outline" size={20} color="white"/>
              </TouchableWithoutFeedback>
              <Text style={styles.textoSelect}>*PERGUNTA SELECIONADA PELO USUÁRIO NO CADASTRO*</Text>
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
            onPress={handleSubmit(handleSubmit(handleSingIn))}
          >
            <Text style={styles.botaotexto1}>AUTENTIFICAR</Text>
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
  },
  textoSelect: {
    padding: 10,
    color: '#DCDCDC',
    width: 240
  },
});

export default PerguntaSecreta;
