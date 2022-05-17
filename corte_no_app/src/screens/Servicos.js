import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const tabelaPrecos = [
  {
    id: '0',
    servico : '*serviços exemplo*',
    preco: 0.00
  },
  {
    id: '1',
    servico : 'corte social',
    preco: 10.00
  },
  {
    id: '2',
    servico : 'corte degradê',
    preco: 15.00
  },
  {
    id: '3',
    servico : 'barba máquina',
    preco: 10.00
  },
  {
    id: '4',
    servico : 'sobrancelha',
    preco: 12.00
  },
  {
    id: '5',
    servico : 'pintura',
    preco: 30.00
  },
  {
    id: '6',
    servico : 'massagem facial',
    preco: 20.00
  },
]

const Servicos = () => {

  return (

    <ImageBackground source={require('../assets/fundo.jpg')} resizeMode="cover" style={styles.container}>

      <View style={styles.barbeariaCard}>
        <Image
          style={styles.barbeariaLogo}
          source={require("../assets/barbeariaExemplo.jpg")}
        />
        <Text style={styles.barbeariaNome}>Barbearia Exemplo</Text>
      </View>
      
      <ScrollView>

        <FlatList 
          data={tabelaPrecos}
          keyExtractor={item=>item.id}
          renderItem={({item}) =>
            <View style={styles.card}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column', flex: 2}}>
                  <Text style={styles.servico}>{item.servico}</Text>
                  <Text style={styles.preco}>R$ {item.preco.toFixed(2).padEnd(8)}</Text>
                </View>
                <TouchableOpacity
                  style={styles.botao1}
                  // On press vai para o AGENDAMENTO
                >
                  <Text style={styles.botaotexto1}>AGENDAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          }
        />

      </ScrollView>

    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  barbeariaCard: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 20, 
    alignItems: 'center',
    backgroundColor: '#00000080',
    borderRadius: 20},
  barbeariaNome: {
    fontSize: 24,
    color: '#FF5C00',
    textAlign: 'center',
    fontVariant: ['small-caps'],
    fontWeight: 'normal',
    flex: 1,
  },
  barbeariaLogo: {
    width: 120,
    height: 120,
    borderRadius: 20,
    padding: 10,
  },
  servico: {
    fontSize: 18,
    color: 'black',
    fontVariant: ['small-caps'],
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 14,
    color: 'black',
    fontVariant: ['small-caps'],
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#DCDCDC',
    marginTop: 30,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 8,
    borderRadius: 20,
  },
  botao1: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 30,
    backgroundColor: '#FF5C00',
    borderRadius: 45,
    flex: 1,
    elevation: 10,
  },
  botaotexto1: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Servicos;
