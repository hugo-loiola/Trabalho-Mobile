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
  Animated,
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
  {
    id: '7',
    servico : 'toalha quente',
    preco: 14.00
  },
  {
    id: '7',
    servico : 'toalha quente',
    preco: 14.00
  },
  {
    id: '7',
    servico : 'toalha quente',
    preco: 14.00
  },
  {
    id: '7',
    servico : 'toalha quente',
    preco: 14.00
  },
  {
    id: '7',
    servico : 'toalha quente',
    preco: 14.00
  },
  {
    id: '7',
    servico : 'toalha quente',
    preco: 14.00
  },
]

const Servicos = () => {

  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  return (

    <ImageBackground source={require('../assets/fundo.jpg')} resizeMode="cover" style={styles.container}>

      <Animated.View style={{
          flexDirection: 'row',
          paddingTop: 34,
          padding: 16,
          alignItems: 'center',
          backgroundColor: '#00000099',
          height: scrollY.interpolate({
            inputRange:[10, 160, 185],
            outputRange: [176, 100, 100],
            extrapolate: 'clamp'
          }),
        }}
      >
        <Animated.Image
          style={{
            height: scrollY.interpolate({
             inputRange:[0, 60, 120],
             outputRange: [120, 60, 0] 
            }),
            width: scrollY.interpolate({
              inputRange:[0, 60, 120],
              outputRange: [120, 60, 0] 
              }),
            opacity: scrollY.interpolate({
              inputRange:[1, 75, 170],
              outputRange: [1, 0, 0],
              extrapolate: 'clamp'
            }),
            borderRadius: 20,
          }}
          source={require("../assets/barbeariaExemplo.jpg")}
          resizeMode='contain'
        />
        <Text style={{
            fontSize: 24,
            color: '#FF5C00',
            textAlign: 'center',
            fontVariant: ['small-caps'],
            fontWeight: 'normal',
            flex: 1,
          }}
        >
          Barbearia Exemplo
        </Text>
      </Animated.View>
      
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([{
            nativeEvent: {
              contentOffset: { y: scrollY }
            },
          }],
          { useNativeDriver: false })}
        >

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
  },
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
    marginTop: 14,
    margin: 16,
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
