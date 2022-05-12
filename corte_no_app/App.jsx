import { StatusBar } from "expo-status-bar";
import { StyleSheet, Alert, View } from "react-native";
import Btn from './src/components/Btn'
import Btn2 from './src/components/Btn2'
import Btn3 from './src/components/Btn3'

export default function App() {
  return (
    <View style={styles.container}>
      <Btn onPress={() => Alert.alert('Corte no App','Bem vindo ao app!')} texto={'ENTRAR'}/>
      <Btn2 texto={'CADASTRE-SE'}/>
      <Btn3 texto1={'Não está cadastrado?'} texto2={'Inscreva-se'}/>
      <StatusBar style="auto" hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
