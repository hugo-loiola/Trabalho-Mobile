import React from "react";
import {
	View,
	Image,
	Text,
	StyleSheet,
	ImageBackground,
	TouchableWithoutFeedback,
	Alert
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import MeuInput from "../components/MeuInput";
import Icon from "react-native-vector-icons/Ionicons";
import Btn from "../components/Btn";
import Btn2 from "../components/Btn2";
import Btn3 from "../components/Btn3";


const schema = yup.object({
	usuario: yup.string().required("Email/usuário/telefone obrigatório"),
	senha: yup
		.string()
		.min(8, ({ min }) => `Senha deve conter no mínimo ${min} caracteres`)
		.required("Senha obrigatória"),
});

const Login = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	function handleSingIn() {
		Alert.alert("Corte no App","Seja bem vindo ao Corte no App, onde seu estilo é nossa prioridade!");
	}

	return (

		<ImageBackground source={require("../assets/fundo.jpg")} resizeMode="cover" style={styles.background}>
				
			<View style={{flex:1, justifyContent:"center", padding: 16}}>

				<Image
					style={styles.logo}
					source={require("../assets/logo.png")}
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
								iconName="person-outline"
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
								iconName="lock-closed-outline"
								placeholder="SENHA"
								value={value}
								onChangeText={onChange}
								secureTextEntry={true}
							/>

						)}
					/>
				</View>

				{errors.senha && (
					<Text style={styles.textoerror}>{errors.senha?.message}</Text>
				)}

				<Btn onPress={handleSubmit(handleSingIn)} texto={"ENTRAR"}/>

				<Btn2 texto={"ESQUECI A SENHA"} />

				<Btn3 texto1={"Não tem cadastro?"} texto2={"Inscreva-se"}/>
			</View>
		</ImageBackground>

	);
};

const styles = StyleSheet.create({
	background: {
		width:"100%",
		height:"100%",
	},
	inputContainer: {
		borderColor: "#FF5C00",
		borderWidth: 1,
		paddingLeft: 10,
		marginTop: 15,
		borderRadius: 45,
		flexDirection: "row",
	},
	icon: {
		alignSelf: "center",
	},
	logo: {
		width: 200,
		height: 300,
		alignSelf: "center",
	},
	textoncadastro: {
		color: "white",
		textAlign: "center",
		marginTop: 50,
	},
	botao1: {
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
		width: 250,
		height: 30,
		backgroundColor: "#FF5C00",
		borderRadius: 45,
		marginTop: 30,
	},
	botao2: {
		alignSelf: "center",
		borderWidth: 1,
		borderColor: "#FF5C00",
		alignItems: "center",
		justifyContent: "center",
		width: 150,
		height: 20,
		marginTop: 20,
		borderRadius: 45,
	},
	botaotexto1: {
		fontSize: 18,
	},
	botaotexto2: {
		color: "white",
		fontSize: 12,
	},
	textoerror: {
		color:"red",
		alignSelf: "center",
		paddingTop: 3,
	}
});

export default Login;