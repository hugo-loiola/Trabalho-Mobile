import { ScrollView, View } from "react-native";
import React from "react";
import MeuCard from "../components/MeuCard";

const Home = () => {
	return (
		<ScrollView style={{backgroundColor:"gray",flex:1}}>
			<View>
				<MeuCard 
					titulo="Nome da Barbearia" 
					telefone="(61)9999-9999" 
					localizacao="teste"
					servico="teste"
					imagem={require("../assets/logo.png")} 
					onPress={() => alert("oi")}
				/>
				<MeuCard 
					titulo="Nome da Barbearia" 
					telefone="(61)9999-9999" 
					localizacao="teste"
					servico="teste"
					imagem={require("../assets/logo.png")} 
					onPress={() => alert("oi")}
				/>
				<MeuCard 
					titulo="Nome da Barbearia" 
					telefone="(61)9999-9999" 
					localizacao="teste"
					servico="teste"
					imagem={require("../assets/logo.png")} 
					onPress={() => alert("oi")}
				/>
				<MeuCard 
					titulo="Nome da Barbearia" 
					telefone="(61)9999-9999" 
					localizacao="teste"
					servico="teste"
					imagem={require("../assets/logo.png")} 
					onPress={() => alert("oi")}
				/>
			</View>
		</ScrollView>
	);
};

export default Home;
