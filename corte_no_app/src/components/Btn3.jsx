/* eslint-disable react/prop-types */
import React from "react";
import {TouchableOpacity, StyleSheet, Text} from "react-native";

const Btn3 = ({onPress , texto1, texto2}) => {
	return(
		<TouchableOpacity onPress={onPress}>
			<Text style={styles.textoncadastro}>
				{texto1}   
				<Text style={{color: "#FF5C00"}}>{texto2}</Text>
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	textoncadastro: {
		color: "white",
		textAlign: "center",
		marginTop: 50,
	},
});

export default Btn3;