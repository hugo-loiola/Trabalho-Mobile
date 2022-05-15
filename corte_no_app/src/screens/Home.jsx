import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import React from "react";
import barbearia from "../data/barbearia";
import Pesquisa from "../components/Pesquisa";

const Home = () => {
	return (
		<View>
			<Pesquisa/>
			<FlatList
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				data={barbearia}
				keyExtractor={item => item.key}
				renderItem = { ({item}) =>(
					
					<View style={styles.container}>

						<View style={styles.card}>
		
							<View style={{alignItems:"center"}}>
								<Image style={styles.img} source={item.img}/>
							</View>
		
							<View style={{paddingTop:5}}>
								<Text style={{textAlign:"left", fontSize:18, color:"orange"}}>{item.nome}</Text>
							</View>
		
							<Text style={{fontSize:12}}>
								{item.telefone}	
							</Text>
		
							<View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-around", paddingTop:10}}>
								<View style={{flexDirection:"column"}}>
									<Text style={{fontSize:12}}>Serviços</Text>
									<Text style={{fontSize:12}}>* {item.servicos.corte}</Text>
									<Text style={{fontSize:12}}>* {item.servicos.dois}</Text>
									<Text style={{fontSize:12}}>* {item.servicos.tres}</Text>
								</View>
		
								<View style={{flexDirection:"column"}}>
									<Text style={{fontSize:12	}}>Localização</Text>
									<Text style={{fontSize:12}}>* {item.localizacao.cep}</Text>
									<Text style={{fontSize:12}}>* {item.localizacao.cidade}</Text>
									<Text style={{fontSize:12}}>* {item.localizacao.uf}</Text>
								</View>
							</View>
		
							<View style={{paddingTop: 40, paddingRight:170}}>
								<TouchableOpacity style={styles.botao} onPress={() => alert("oi")}>
									<Text style={styles.botaoTexto}>AGENDAR</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				)
				}
			/>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container:{
		flexDirection: "column",
		flex:1,
		justifyContent:"center",
		alignItems:"center"
	},
	card:{
		width: 328,
		height: 328,
		backgroundColor: "#dcdcdc",
		borderRadius: 15,
		padding: 16,
		paddingTop:0,
		marginBottom: 20,
		elevation:15
	},
	img:{
		height: 104,
		width: 328,
		resizeMode:"cover",
		borderRadius: 15,
	},
	botao:{
		alignSelf: "center",
		justifyContent:"center",
		alignItems:"center",
		width: 120,
		height: 32,
		backgroundColor:"orange",
		borderRadius: 15,
		elevation: 10,
	},
	botaoTexto:{
		textAlign:"center",
		fontSize: 14,
		fontWeight:"bold",
	}
});